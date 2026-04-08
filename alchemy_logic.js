/**
 * Skyrim Simple Alchemy Logic
 * This handles ingredient matching and potion calculations.
 */

const AlchemyLogic = {
    // Finds effects shared by 2 or 3 ingredients
    calculateEffects: function(ingredients) {
        // If less than 2 ingredients, no effects possible
        if (ingredients.length < 2) return [];

        // Count how many times each effect appears
        const effectCounts = {};
        ingredients.forEach(ing => {
            ing.effects.forEach(effect => {
                // Add 1 to the count for this effect
                effectCounts[effect] = (effectCounts[effect] || 0) + 1;
            });
        });

        // If an effect appears 2 or more times, it is a match
        return Object.keys(effectCounts).filter(effect => effectCounts[effect] >= 2);
    },

    // Suggests ingredients that work with the current selection
    getSuggestions: function(currentSelection) {
        // If nothing selected, show all ingredients
        if (currentSelection.length === 0) {
            return ALCHEMY_DATA;
        }

        // Limit to maximum 3 ingredients total
        if (currentSelection.length >= 3) return [];

        // Collect all effects from currently selected ingredients
        const currentEffects = new Set();
        currentSelection.forEach(ing => {
            ing.effects.forEach(eff => currentEffects.add(eff));
        });

        // Filter all ingredients to find valid matches
        return ALCHEMY_DATA
            .filter(ing => {
                // Don't suggest an ingredient already in the slot
                if (currentSelection.some(s => s.name === ing.name)) return false;

                // Check if this ingredient shares any effect with our selection
                return ing.effects.some(eff => currentEffects.has(eff));
            })
            // Sort the list alphabetically by name
            .sort((a, b) => a.name.localeCompare(b.name));
    },

    // Helper to get the very first alphabetical match
    getBestABCPlaceholder: function(selection) {
        const suggestions = this.getSuggestions(selection);
        // Return the first suggestion or nothing
        return suggestions.length > 0 ? suggestions[0] : null;
    },

    // Checks if a specific known recipe exists for these ingredients
    findRecipe: function(selectionNames) {
        return RECIPES.find(recipe => {
            // Check if all recipe ingredients are present in our selection
            return recipe.ingredients.every(ri => selectionNames.includes(ri)) &&
                selectionNames.length === recipe.ingredients.length;
        });
    },

    // Creates a list of all possible potion results for one ingredient
    getEquationsForIngredient: function(source) {
        const equations = [];
        const seenCombos = new Set();

        // Loop through all ingredients to find pairs
        ALCHEMY_DATA.forEach(b => {
            if (b.name === source.name) return; // Skip same name
            const effects = this.calculateEffects([source, b]);
            if (effects.length > 0) {
                // If they match, add to our list
                equations.push({
                    ingredients: [source, b],
                    effects: effects,
                    potionName: this.getPotionName(effects)
                });
                // Remember this combination to avoid duplicates
                seenCombos.add([source.name, b.name].sort().join('|'));
            }
        });

        // Loop through again to find valid 3-ingredient groups
        ALCHEMY_DATA.forEach(b => {
            if (b.name === source.name) return;

            const effectsAB = this.calculateEffects([source, b]);
            if (effectsAB.length === 0) return; // Pair should work first

            ALCHEMY_DATA.forEach(c => {
                if (c.name === source.name || c.name === b.name) return;

                const comboKey = [source.name, b.name, c.name].sort().join('|');
                if (seenCombos.has(comboKey)) return;

                const effectsABC = this.calculateEffects([source, b, c]);

                // Only add if it adds more effects or matches
                if (effectsABC.length >= 2 || (effectsABC.length > effectsAB.length)) {
                    equations.push({
                        ingredients: [source, b, c],
                        effects: effectsABC,
                        potionName: this.getPotionName(effectsABC)
                    });
                    seenCombos.add(comboKey);
                }
            });
        });

        // Sort results by ingredient names
        return equations.sort((a, b) => {
            const nameA = a.ingredients.map(i => i.name).join('');
            const nameB = b.ingredients.map(i => i.name).join('');
            return nameA.localeCompare(nameB);
        });
    },

    // Finds only 3rd ingredients to finish a pair
    getTripletsForPair: function(ing1, ing2) {
        const results = [];
        ALCHEMY_DATA.forEach(ing3 => {
            if (ing3.name === ing1.name || ing3.name === ing2.name) return;
            const effects = this.calculateEffects([ing1, ing2, ing3]);
            if (effects.length > 0) {
                results.push({
                    ingredient: ing3,
                    effects: effects,
                    potionName: this.getPotionName(effects)
                });
            }
        });
        // Sort so potions with more effects are at the top
        return results.sort((a, b) => b.effects.length - a.effects.length);
    },

    // Decides what to call the resulting mixture
    getPotionName: function(effects) {
        // No matches mean it's inert
        if (effects.length === 0) return "Inert Mixture";

        // Check if any effect is a negative one (poisonous)
        const isPoison = effects.some(e =>
            e.toLowerCase().includes("damage") ||
            e.toLowerCase().includes("ravage") ||
            e.toLowerCase().includes("weakness") ||
            e.toLowerCase().includes("frenzy") ||
            e.toLowerCase().includes("fear") ||
            e.toLowerCase().includes("slow") ||
            e.toLowerCase().includes("paralysis")
        );

        // If only one effect, use that effect's name
        if (effects.length === 1) {
            return effects[0];
        }

        // Multiple effects get a general name
        return isPoison ? "Multi-Effect Poison" : "Multi-Effect Potion";
    }
};