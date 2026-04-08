/**
 * Skyrim Simple Alchemy controller
 */

const app = {
    storageKey: 'skyrim_simple_alchemy_state_v1',
    // Confirmed ingredients in each slot (null = empty, 'EMPTY' = user cleared it)
    slots: [null, null, null],
    // Best alphabetical auto-candidate for each empty slot
    placeholders: [null, null, null],
    // Active formula column index
    activeSlot: -1,
    // Keyboard-nav index inside a formula column list
    highlightedIndex: -1,
    // Keyboard-nav index inside the spotlight list
    spotlightHighlight: -1,

    // ── Bootstrap ──────────────────────────────────────────────────────
    init: function() {
        this.cacheDOM();
        this.bindEvents();
    },

    cacheDOM: function() {
        this.viewport = document.getElementById('appViewport');
        this.appHeader = document.getElementById('appHeader');
        this.spotlightInput = document.getElementById('spotlightInput');
        this.spotlightResults = document.getElementById('spotlightResults');

        this.slotInputs = [
            document.getElementById('slotInput1'),
            document.getElementById('slotInput2'),
            document.getElementById('slotInput3'),
        ];
        this.slotEffects = [
            document.getElementById('slotEffects1'),
            document.getElementById('slotEffects2'),
            document.getElementById('slotEffects3'),
        ];
        this.suggestionsContainers = [
            document.getElementById('suggestions1'),
            document.getElementById('suggestions2'),
            document.getElementById('suggestions3'),
        ];

        this.resultBox = document.getElementById('resultBox');
        this.resultPotionName = document.getElementById('resultPotionName');
        this.resultEffects = document.getElementById('resultEffects');
    },

    bindEvents: function() {
        // Header click or keyboard Enter/Space returns to main screen
        this.appHeader.addEventListener('click', () => this.handleHeaderAction());
        this.appHeader.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleHeaderAction();
            }
        });

        // Main Input bar
        this.spotlightInput.addEventListener('input', () => this.handleSpotlightSearch());
        this.spotlightInput.addEventListener('keydown', (e) => this.handleSpotlightKeydown(e));

        // Formula slots
        this.slotInputs.forEach((input, index) => {
            input.addEventListener('focus', () => this.handleSlotFocus(index));
            input.addEventListener('input', () => this.handleSlotInput(index));
            input.addEventListener('keydown', (e) => this.handleSlotKeydown(e, index));
        });

        // Slot-1 blur with empty value → return to search
        this.slotInputs[0].addEventListener('blur', () => {
            setTimeout(() => {
                if (this.slotInputs[0].value.trim() === '') this.resetSelection();
            }, 200);
        });
    },

    handleHeaderAction: function() {
        if (this.viewport.classList.contains('is-crafting')) {
            this.resetSelection();
        }
    },

    // ── Main Input ──────────────────────────────────────────────────────

    handleSpotlightSearch: function() {
        const query = this.spotlightInput.value.trim().toLowerCase();
        this.spotlightHighlight = -1;

        if (!query) { this.spotlightResults.innerHTML = ''; return; }

        const matches = ALCHEMY_DATA
            .filter(ing => ing.name.toLowerCase().includes(query))
            .slice(0, 12);

        this.renderSpotlightResults(matches);
    },

    renderSpotlightResults: function(matches) {
        this.spotlightResults.innerHTML = matches
            .map(ing => `
                <div class="spotlight-item"
                     onclick="app.startCrafting('${ing.name.replace(/'/g, "\\'")}')">
                    <div class="spotlight-item-main">${this.escapeHtml(ing.name)}</div>
                    <div class="spotlight-item-effects">${this.renderEffectsHTML(ing.effects)}</div>
                </div>`)
            .join('');
    },

    // Up / Down / Enter keyboard navigation in spotlight
    handleSpotlightKeydown: function(e) {
        const items = Array.from(this.spotlightResults.querySelectorAll('.spotlight-item'));
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.spotlightHighlight = Math.min(this.spotlightHighlight + 1, items.length - 1);
            this._applySpotlightHighlight(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.spotlightHighlight = Math.max(this.spotlightHighlight - 1, 0);
            this._applySpotlightHighlight(items);
        } else if (e.key === 'Enter') {
            if (this.spotlightHighlight >= 0) {
                items[this.spotlightHighlight].click();
            } else if (items.length > 0) {
                items[0].click();
            }
        }
    },

    _applySpotlightHighlight: function(items) {
        items.forEach((el, idx) => el.classList.toggle('active', idx === this.spotlightHighlight));
        const active = items[this.spotlightHighlight];
        if (active) {
            const main = active.querySelector('.spotlight-item-main');
            this.spotlightInput.value = main ? main.textContent.trim() : active.textContent.trim();
            active.scrollIntoView({ block: 'nearest' });
        }
    },

    // ── TRANSITION TO FORMULA LAB ───────────────────────────────────────

    startCrafting: function(name) {
        const ing = ALCHEMY_DATA.find(i => i.name === name);
        if (!ing) return;

        this.slots[0] = ing;
        this.viewport.classList.add('is-crafting');

        this._confirmSlot(0, ing);
        this.recalculateFrom(1);
        this.persistState();
    },

    // ── FORMULA SLOT EVENTS ────────────────────────────────────────────

    handleSlotFocus: function(index) {
        this.activeSlot = index;
        this.highlightedIndex = -1;
        this.renderSuggestionsForColumn(index);
        this.persistState();
    },

    handleSlotInput: function(index) {
        const value = this.slotInputs[index].value.trim();
        const query = value.toLowerCase();

        if (value === '') {
            // Slot explicitly cleared
            this.slots[index] = 'EMPTY';
            this.slotInputs[index].classList.remove('selected');
            this.slotEffects[index].innerText = '';
            if (index === 0) this._clearSubsequentSlots();
            this.recalculateFrom(index + 1);
            this.renderSuggestionsForColumn(index);
            this.persistState();
            return;
        }

        // Exact name match → auto-confirm
        const exact = ALCHEMY_DATA.find(ing => ing.name.toLowerCase() === query);
        if (exact) {
            this.slots[index] = exact;
            this._confirmSlot(index, exact);
            if (index === 0) this._clearSubsequentSlots();
            this.recalculateFrom(index + 1);
        } else {
            this.slots[index] = { name: 'INVALID', effects: [] };
            this.slotInputs[index].classList.remove('selected');
            this.slotEffects[index].innerText = '';
            this.updateFinalResult();
        }

        this.renderSuggestionsForColumn(index);
    },

    // Arrow-key + Enter nav inside a formula column's suggestion list
    handleSlotKeydown: function(e, index) {
        const container = this.suggestionsContainers[index];
        const suggestions = Array.from(container ? container.querySelectorAll('.rich-suggestion') : []);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.highlightedIndex = Math.min(this.highlightedIndex + 1, suggestions.length - 1);
            this._applyColumnHighlight(index, suggestions);

        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
            this._applyColumnHighlight(index, suggestions);

        } else if (e.key === 'Enter') {
            if (this.highlightedIndex >= 0 && suggestions[this.highlightedIndex]) {
                // Select the keyboard-highlighted suggestion
                const name = suggestions[this.highlightedIndex].querySelector('.rich-name').innerText;
                this.selectFromSuggestion(index, name);
            } else {
                // Nothing highlighted — accept the placeholder if it exists
                const ph = this.placeholders[index];
                if (ph && this.slotInputs[index].value.trim() === '') {
                    this.selectFromSuggestion(index, ph.name);
                }
            }
        }
    },

    _applyColumnHighlight: function(index, suggestions) {
        suggestions.forEach((s, idx) => {
            s.classList.toggle('active', idx === this.highlightedIndex);
            if (idx === this.highlightedIndex) {
                s.scrollIntoView({ block: 'nearest' });
                // Live-preview the ingredient name in the input (non-committing)
                this.slotInputs[index].value = s.querySelector('.rich-name').innerText;
            }
        });
    },

    // Clicking a suggestion card or pressing Enter on one
    selectFromSuggestion: function(index, name, commit = true) {
        const ing = ALCHEMY_DATA.find(i => i.name === name);
        if (!ing) return;

        this.slots[index] = ing;
        this._confirmSlot(index, ing);

        if (index === 0) {
            this._clearSubsequentSlots();
            this.recalculateFrom(1);
        } else {
            this.recalculateFrom(index + 1);
        }

        // Always refresh the slot we just selected to remove stale self-entry.
        this.renderSuggestionsForColumn(index);

        if (commit) this.highlightedIndex = -1;
        this.persistState();
    },

    // ── HELPERS ────────────────────────────────────────────────────────

    escapeHtml: function(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    },

    isNegativeEffect: function(effect) {
        return /damage|ravage|weakness|frenzy|fear|slow|paralysis/i.test(effect);
    },

    renderEffectsHTML: function(effects) {
        return effects
            .map(effect => {
                const cls = this.isNegativeEffect(effect) ? 'effect-bad' : 'effect-good';
                return `<span class="${cls}">${this.escapeHtml(effect)}</span>`;
            })
            .join('<span class="effect-separator"> · </span>');
    },

    // Mark a slot as confirmed: gold text + show effects line
    _confirmSlot: function(index, ing) {
        this.slotInputs[index].value = ing.name;
        this.slotInputs[index].classList.add('selected');
        this.slotEffects[index].innerHTML = this.renderEffectsHTML(ing.effects);
    },

    // Wipe slots 2 & 3 when Ingredient I changes
    _clearSubsequentSlots: function() {
        for (let i = 1; i < 3; i++) {
            this.slots[i] = null;
            this.slotInputs[i].value = '';
            this.slotInputs[i].classList.remove('selected');
            this.slotEffects[i].innerText = '';
        }
    },

    // ── CASCADING CALCULATION ──────────────────────────────────────────

    recalculateFrom: function(startIndex) {
        for (let i = startIndex; i < 3; i++) {
            const precursors = this.getPrecursors(i);
            const alreadyGood = AlchemyLogic.calculateEffects(precursors).length > 0;
            const slotIsEmpty = !this.slotInputs[i].value.trim() && this.slots[i] !== 'EMPTY';

            if (i === 2 && alreadyGood) {
                // Two-ingredient potion already works — slot 3 not needed
                this.placeholders[i] = null;
                this.slotInputs[i].placeholder = 'None needed';
                // Keep selected ingredient effects visible; clear only when slot is actually empty.
                if (slotIsEmpty || this.slots[i] === 'EMPTY') {
                    this.slotEffects[i].innerText = '';
                }
            } else {
                const best = AlchemyLogic.getBestABCPlaceholder(precursors);
                if (best) {
                    this.placeholders[i] = best;
                    // Show the suggested ingredient in the placeholder text
                    this.slotInputs[i].placeholder = best.name;
                    // If slot is truly empty, also show suggested effects in italic below
                    if (slotIsEmpty) {
                        this.slotEffects[i].innerHTML = this.renderEffectsHTML(best.effects);
                    }
                } else {
                    this.placeholders[i] = null;
                    this.slotInputs[i].placeholder = precursors.length > 0 ? 'No matches' : 'Optional…';
                    if (slotIsEmpty) this.slotEffects[i].innerText = '';
                }
            }

            this.renderSuggestionsForColumn(i);
        }
        this.updateFinalResult();
    },

    // Collect the "active" ingredients up to a given column index
    // Uses confirmed slots; falls back to placeholder for genuinely empty slots
    getPrecursors: function(index) {
        const effective = [];
        for (let i = 0; i < index; i++) {
            const s = this.slots[i];
            if (s && s !== 'EMPTY' && s.name !== 'INVALID') {
                effective.push(s);
            } else if (this.placeholders[i] && !this.slotInputs[i].value.trim()) {
                effective.push(this.placeholders[i]);
            }
        }
        return effective;
    },

    // ── RESULT BOX ─────────────────────────────────────────────────────

    updateFinalResult: function() {
        const finalSelection = [];
        let invalid = false;

        // One pass: confirmed slot OR placeholder, never both
        this.slots.forEach((s, i) => {
            if (s && s !== 'EMPTY') {
                if (s.name === 'INVALID') { invalid = true; } else finalSelection.push(s);
            } else if (s === null && this.placeholders[i] && !this.slotInputs[i].value.trim()) {
                finalSelection.push(this.placeholders[i]);
            }
        });

        const effects = invalid ? [] : AlchemyLogic.calculateEffects(finalSelection);
        this.renderResultBox(effects, invalid);
    },

    renderResultBox: function(effects, isInvalid) {
        if (effects.length > 0) {
            this.resultBox.classList.remove('invalid');
            this.resultPotionName.innerText = AlchemyLogic.getPotionName(effects);
            this.resultEffects.innerHTML = effects
                .map(e => {
                    const isPoison = /damage|ravage|weakness|frenzy|fear|slow|paralysis/i.test(e);
                    return `<span class="effect-badge ${isPoison ? 'poison' : ''}">${e}</span>`;
                })
                .join('');
        } else {
            this.resultBox.classList.add('invalid');
            this.resultPotionName.innerText = 'Inert Mixture';
            this.resultEffects.innerHTML = `<span style="color:var(--danger);font-size:0.73rem;">${
                isInvalid ? 'Unknown ingredient' : 'No shared effects'
            }</span>`;
        }
    },

    // ── SUGGESTION RENDERING ───────────────────────────────────────────

    renderSuggestionsForColumn: function(index) {
        const container = this.suggestionsContainers[index];
        if (!container) return;

        const precursors = this.getPrecursors(index);
        const pool = (index === 0) ? ALCHEMY_DATA : AlchemyLogic.getSuggestions(precursors);
        const currentInput = this.slotInputs[index].value.trim().toLowerCase();
        const slotValue = this.slots[index];
        const isConfirmedSelection =
            slotValue &&
            slotValue !== 'EMPTY' &&
            slotValue.name !== 'INVALID' &&
            currentInput === slotValue.name.toLowerCase();
        const query = isConfirmedSelection ? '' : currentInput;

        // Build the set of names to exclude from the list:
        // 1. The ingredient currently confirmed/typed in THIS slot
        // 2. The placeholder ingredient shown in THIS slot (avoid duplicate)
        // 3. Any ingredient already confirmed in the other slots
        const excludeNames = new Set();
        const normalized = (name) => (name || '').trim().toLowerCase();

        // Currently confirmed slot value
        const s = this.slots[index];
        if (s && s !== 'EMPTY' && s.name !== 'INVALID') excludeNames.add(normalized(s.name));

        // Placeholder for this slot
        const ph = this.placeholders[index];
        if (ph) excludeNames.add(normalized(ph.name));

        // Confirmed ingredients in the other two slots
        this.slots.forEach((other, i) => {
            if (i !== index && other && other !== 'EMPTY' && other.name !== 'INVALID') {
                excludeNames.add(normalized(other.name));
            }
        });

        // If user confirmed a slot ingredient, never show it in that same slot list
        if (isConfirmedSelection) excludeNames.add(currentInput);

        // Filter: match query AND not in exclusion set; also guard against duplicates by name
        const seenNames = new Set();
        const filtered = pool.filter(item => {
            const itemKey = normalized(item.name);
            if (!itemKey.includes(query)) return false;
            if (excludeNames.has(itemKey)) return false;
            if (seenNames.has(itemKey)) return false;
            seenNames.add(itemKey);
            return true;
        });

        // Visibility: slot-1 list only when focused or empty
        if (index === 0) {
            const focused = document.activeElement === this.slotInputs[0];
            container.style.display = (focused || !this.slotInputs[0].value) && !isConfirmedSelection ? 'flex' : 'none';
        } else {
            container.style.display = 'flex';
        }

        container.innerHTML = filtered
            .map(s => `
                <div class="rich-suggestion" onclick="app.selectFromSuggestion(${index}, '${s.name.replace(/'/g, "\\'")}')">
                    <div class="rich-name">${this.escapeHtml(s.name)}</div>
                    <div class="rich-effects">${this.renderEffectsHTML(s.effects)}</div>
                </div>`)
            .join('');
    },

    // ── RESET ──────────────────────────────────────────────────────────

    resetSelection: function() {
        this.slots = [null, null, null];
        this.placeholders = [null, null, null];
        this.spotlightHighlight = -1;
        this.highlightedIndex = -1;

        this.viewport.classList.remove('is-crafting');

        this.spotlightInput.value = '';
        this.spotlightResults.innerHTML = '';

        this.slotInputs.forEach((si, i) => {
            si.value = '';
            si.classList.remove('selected');
        });
        this.slotEffects.forEach(se => se.innerText = '');

        // Reset default placeholders
        this.slotInputs[0].placeholder = 'Search…';
        this.slotInputs[1].placeholder = '';
        this.slotInputs[2].placeholder = '';

        this.resultPotionName.innerText = '—';
        this.resultEffects.innerHTML = '';
        this.resultBox.classList.remove('invalid');
        localStorage.removeItem(this.storageKey);

        setTimeout(() => this.spotlightInput.focus(), 80);
    },

    persistState: function() {
        const payload = {
            isCrafting: this.viewport.classList.contains('is-crafting'),
            slots: this.slots.map((slot, index) => {
                if (slot === null) return { type: 'NULL' };
                if (slot === 'EMPTY') return { type: 'EMPTY' };
                if (slot && slot.name === 'INVALID') {
                    return { type: 'INVALID', value: this.slotInputs[index].value.trim() };
                }
                return { type: 'INGREDIENT', name: slot.name };
            }),
        };
        localStorage.setItem(this.storageKey, JSON.stringify(payload));
    },

    restoreState: function() {
        const raw = localStorage.getItem(this.storageKey);
        if (!raw) return;

        let saved;
        try {
            saved = JSON.parse(raw);
        } catch {
            localStorage.removeItem(this.storageKey);
            return;
        }

        if (!saved || !saved.isCrafting || !Array.isArray(saved.slots) || !saved.slots.length) return;

        this.viewport.classList.add('is-crafting');

        for (let i = 0; i < 3; i++) {
            const entry = saved.slots[i] || { type: 'NULL' };

            if (entry.type === 'INGREDIENT' && entry.name) {
                const ing = ALCHEMY_DATA.find(item => item.name === entry.name);
                if (ing) {
                    this.slots[i] = ing;
                    this._confirmSlot(i, ing);
                    continue;
                }
            }

            if (entry.type === 'EMPTY') {
                this.slots[i] = 'EMPTY';
                this.slotInputs[i].value = '';
                this.slotInputs[i].classList.remove('selected');
                this.slotEffects[i].innerText = '';
                continue;
            }

            if (entry.type === 'INVALID') {
                this.slots[i] = { name: 'INVALID', effects: [] };
                this.slotInputs[i].value = entry.value || '';
                this.slotInputs[i].classList.remove('selected');
                this.slotEffects[i].innerText = '';
                continue;
            }

            this.slots[i] = null;
            this.slotInputs[i].value = '';
            this.slotInputs[i].classList.remove('selected');
            this.slotEffects[i].innerText = '';
        }

        // Re-render all columns so restored selections get clean suggestion lists.
        this.recalculateFrom(0);
    },
};

window.onload = () => {
    app.init();
    app.restoreState();
};