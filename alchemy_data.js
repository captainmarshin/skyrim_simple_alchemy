/**
 * Skyrim Ingredients and Recepies
 * Source: https://en.uesp.net/wiki/Skyrim:Alchemy

 * Vanila Skyrim (oldrim), Dawnguard, Dragonborn, Hearthfire 
 * 
 * In current version only name and effects in use
 */

const ALCHEMY_DATA = [
  {
    name: "Abecean Longfin",
    effects: ["Weakness to Frost", "Fortify Sneak", "Weakness to Poison", "Fortify Restoration"],
    weight: 0.5,
    value: 15,
    locations: "Lakes, rivers, streams, fish barrels",
    version: "Skyrim"
  },
  {
    name: "Ancestor Moth Wing",
    effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"],
    weight: 0.1,
    value: 2,
    locations: "Ancestor Glade",
    version: "Skyrim Dawnguard"
  },
  {
    name: "Ash Creep Cluster",
    effects: ["Damage Stamina", "Invisibility", "Resist Fire", "Fortify Destruction"],
    weight: 0.3,
    value: 20,
    locations: "Harvested from ash covered areas of Solstheim",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Ash Hopper Jelly",
    effects: ["Restore Health", "Fortify Light Armor", "Resist Shock", "Weakness to Frost"],
    weight: 0.3,
    value: 20,
    locations: "Ash Hopper Corpses",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Ashen Grass Pod",
    effects: ["Resist Fire", "Weakness to Shock", "Fortify Lockpicking", "Fortify Sneak"],
    weight: 0.1,
    value: 1,
    locations: "Harvested from ash covered areas of Solstheim",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Bear Claws",
    effects: ["Restore Stamina", "Fortify Health", "Fortify One-Handed", "Damage Magicka Regen"],
    weight: 0.1,
    value: 2,
    locations: "Bears",
    version: "Skyrim"
  },
  {
    name: "Bee",
    effects: ["Restore Stamina", "Ravage Stamina", "Regenerate Stamina", "Weakness to Shock"],
    weight: 0.1,
    value: 3,
    locations: "Beehive",
    version: "Skyrim"
  },
  {
    name: "Beehive Husk",
    effects: ["Resist Poison", "Fortify Light Armor", "Fortify Sneak", "Fortify Destruction"],
    weight: 1.0,
    value: 5,
    locations: "Beehive",
    version: "Skyrim"
  },
  {
    name: "Berit's Ashes",
    effects: ["Damage Stamina", "Resist Fire", "Fortify Conjuration", "Ravage Stamina"],
    weight: 0.5,
    value: 5,
    locations: "Quest item given by Thadgeir",
    version: "Skyrim"
  },
  {
    name: "Bleeding Crown",
    effects: ["Weakness to Fire", "Fortify Block", "Weakness to Poison", "Resist Magic"],
    weight: 0.3,
    value: 10,
    locations: "Mushroom clusters",
    version: "Skyrim"
  },
  {
    name: "Blisterwort",
    effects: ["Damage Stamina", "Frenzy", "Restore Health", "Fortify Smithing"],
    weight: 0.2,
    value: 12,
    locations: "Caves and dark areas",
    version: "Skyrim"
  },
  {
    name: "Blue Butterfly Wing",
    effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"],
    weight: 0.1,
    value: 2,
    locations: "Blue Butterfly",
    version: "Skyrim"
  },
  {
    name: "Blue Dartwing",
    effects: ["Resist Shock", "Fortify Pickpocket", "Restore Health", "Fear"],
    weight: 0.1,
    value: 1,
    locations: "Hovering above water",
    version: "Skyrim"
  },
  {
    name: "Blue Mountain Flower",
    effects: ["Restore Health", "Fortify Conjuration", "Fortify Health", "Damage Magicka Regen"],
    weight: 0.1,
    value: 2,
    locations: "Mountain flower clumps",
    version: "Skyrim"
  },
  {
    name: "Boar Tusk",
    effects: ["Fortify Stamina", "Fortify Health", "Fortify Block", "Frenzy"],
    weight: 0.5,
    value: 20,
    locations: "Tusked Bristlebacks",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Bone Meal",
    effects: ["Damage Stamina", "Resist Fire", "Fortify Conjuration", "Ravage Stamina"],
    weight: 0.5,
    value: 5,
    locations: "Draugr and skeletons",
    version: "Skyrim"
  },
  {
    name: "Briar Heart",
    effects: ["Restore Magicka", "Fortify Block", "Paralysis", "Fortify Magicka"],
    weight: 0.5,
    value: 20,
    locations: "Forsworn Leaders",
    version: "Skyrim"
  },
  {
    name: "Burnt Spriggan Wood",
    effects: ["Weakness to Fire", "Fortify Alteration", "Damage Magicka Regen", "Slow"],
    weight: 0.5,
    value: 20,
    locations: "Burnt Spriggans",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Butterfly Wing",
    effects: ["Restore Health", "Fortify Barter", "Lingering Damage Stamina", "Damage Magicka"],
    weight: 0.1,
    value: 3,
    locations: "Monarch Butterfly",
    version: "Skyrim"
  },
  {
    name: "Canis Root",
    effects: ["Damage Stamina", "Fortify One-Handed", "Fortify Marksman", "Paralysis"],
    weight: 0.1,
    value: 5,
    locations: "Near rocky areas",
    version: "Skyrim"
  },
  {
    name: "Charred Skeever Hide",
    effects: ["Restore Stamina", "Cure Disease", "Resist Poison", "Restore Health"],
    weight: 0.5,
    value: 1,
    locations: "Found at campfires",
    version: "Skyrim"
  },
  {
    name: "Chaurus Eggs",
    effects: ["Weakness to Poison", "Fortify Stamina", "Damage Magicka", "Invisibility"],
    weight: 0.2,
    value: 10,
    locations: "Falmer caves",
    version: "Skyrim"
  },
  {
    name: "Chaurus Hunter Antennae",
    effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"],
    weight: 0.1,
    value: 2,
    locations: "Chaurus Hunter, Chaurus Hunter Fledgling",
    version: "Skyrim Dawnguard"
  },
  {
    name: "Chicken's Egg",
    effects: ["Resist Magic", "Damage Magicka Regen", "Waterbreathing", "Lingering Damage Stamina"],
    weight: 0.5,
    value: 2,
    locations: "Chicken's Nest",
    version: "Skyrim"
  },
  {
    name: "Creep Cluster",
    effects: ["Restore Magicka", "Damage Stamina Regen", "Fortify Carry Weight", "Weakness to Magic"],
    weight: 0.2,
    value: 1,
    locations: "Hydro-thermal areas",
    version: "Skyrim"
  },
  {
    name: "Crimson Nirnroot",
    effects: ["Damage Health", "Damage Stamina", "Invisibility", "Resist Magic"],
    weight: 0.2,
    value: 10,
    locations: "Blackreach",
    version: "Skyrim"
  },
  {
    name: "Cyrodilic Spadetail",
    effects: ["Damage Stamina", "Fortify Restoration", "Fear", "Ravage Health"],
    weight: 0.3,
    value: 15,
    locations: "Lakes, rivers, streams, fish barrels",
    version: "Skyrim"
  },
  {
    name: "Daedra Heart",
    effects: ["Restore Health", "Damage Stamina Regen", "Damage Magicka", "Fear"],
    weight: 0.5,
    value: 250,
    locations: "Daedra",
    version: "Skyrim"
  },
  {
    name: "Deathbell",
    effects: ["Damage Health", "Ravage Stamina", "Slow", "Weakness to Poison"],
    weight: 0.1,
    value: 4,
    locations: "Wild, on planters",
    version: "Skyrim"
  },
  {
    name: "Dragon's Tongue",
    effects: ["Resist Fire", "Fortify Barter", "Fortify Illusion", "Fortify Two-handed"],
    weight: 0.1,
    value: 5,
    locations: "Hydro-thermal areas",
    version: "Skyrim"
  },
  {
    name: "Dwarven Oil",
    effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Magicka", "Restore Magicka"],
    weight: 0.3,
    value: 15,
    locations: "Dwemer Ruins",
    version: "Skyrim"
  },
  {
    name: "Ectoplasm",
    effects: ["Restore Magicka", "Fortify Destruction", "Fortify Magicka", "Damage Health"],
    weight: 0.1,
    value: 25,
    locations: "Ghostlike creatures",
    version: "Skyrim"
  },
  {
    name: "Elves Ear",
    effects: ["Restore Magicka", "Fortify Marksman", "Weakness to Frost", "Resist Fire"],
    weight: 0.1,
    value: 10,
    locations: "Plant, hanging herbs",
    version: "Skyrim"
  },
  {
    name: "Emperor Parasol Moss",
    effects: ["Damage Health", "Fortify Magicka", "Regenerate Health", "Fortify Two-Handed"],
    weight: 0.3,
    value: 1,
    locations: "Hanging from Emperor Parasol around Tel Mithryn",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Eye of Sabre Cat",
    effects: ["Restore Stamina", "Ravage Health", "Damage Magicka", "Restore Health"],
    weight: 0.1,
    value: 2,
    locations: "Sabre Cat, Snowy Sabre Cat",
    version: "Skyrim"
  },
  {
    name: "Falmer Ear",
    effects: ["Damage Health", "Frenzy", "Resist Poison", "Fortify Lockpicking"],
    weight: 0.2,
    value: 10,
    locations: "Falmer",
    version: "Skyrim"
  },
  {
    name: "Felsaad Tern Feathers",
    effects: ["Restore Health", "Fortify Light Armor", "Cure Disease", "Resist Magic"],
    weight: 0.1,
    value: 15,
    locations: "Felsaad Tern",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Fire Salts",
    effects: ["Weakness to Frost", "Resist Fire", "Restore Magicka", "Regenerate Magicka"],
    weight: 0.3,
    value: 50,
    locations: "Flame Atronach",
    version: "Skyrim"
  },
  {
    name: "Fly Amanita",
    effects: ["Resist Fire", "Fortify Two-handed", "Frenzy", "Regenerate Stamina"],
    weight: 0.1,
    value: 2,
    locations: "Mushroom clusters in and around caves",
    version: "Skyrim"
  },
  {
    name: "Frost Mirriam",
    effects: ["Resist Frost", "Fortify Sneak", "Ravage Magicka", "Damage Stamina Regen"],
    weight: 0.1,
    value: 1,
    locations: "Hanging in homes, businesses and giant camps",
    version: "Skyrim"
  },
  {
    name: "Frost Salts",
    effects: ["Weakness to Fire", "Resist Frost", "Restore Magicka", "Fortify Conjuration"],
    weight: 0.3,
    value: 100,
    locations: "Frost Atronach",
    version: "Skyrim"
  },
  {
    name: "Garlic",
    effects: ["Resist Poison", "Fortify Stamina", "Regenerate Magicka", "Regenerate Health"],
    weight: 0.3,
    value: 1,
    locations: "Hanging in homes, businesses and cooking areas",
    version: "Skyrim"
  },
  {
    name: "Giant Lichen",
    effects: ["Weakness to Shock", "Ravage Health", "Weakness to Poison", "Restore Magicka"],
    weight: 0.3,
    value: 5,
    locations: "Swamps",
    version: "Skyrim"
  },
  {
    name: "Giant's Toe",
    effects: ["Damage Stamina", "Fortify Health", "Fortify Carry Weight", "Damage Stamina Regen"],
    weight: 1.0,
    value: 20,
    locations: "Giants",
    version: "Skyrim"
  },
  {
    name: "Gleamblossom",
    effects: ["Resist Magic", "Fear", "Regenerate Health", "Paralysis"],
    weight: 0.1,
    value: 5,
    locations: "Darkfall Cave, Forgotten Vale",
    version: "Skyrim Dawnguard"
  },
  {
    name: "Glow Dust",
    effects: ["Damage Magicka", "Damage Magicka Regen", "Fortify Destruction", "Resist Shock"],
    weight: 0.5,
    value: 20,
    locations: "Wispmother",
    version: "Skyrim"
  },
  {
    name: "Glowing Mushroom",
    effects: ["Resist Shock", "Fortify Destruction", "Fortify Smithing", "Fortify Health"],
    weight: 0.2,
    value: 5,
    locations: "Caves, Dwemer Ruins",
    version: "Skyrim"
  },
  {
    name: "Grass Pod",
    effects: ["Resist Poison", "Ravage Magicka", "Fortify Alteration", "Restore Magicka"],
    weight: 0.1,
    value: 1,
    locations: "Tundras",
    version: "Skyrim"
  },
  {
    name: "Hagraven Claw",
    effects: ["Resist Magic", "Lingering Damage Magicka", "Fortify Enchanting", "Fortify Barter"],
    weight: 0.3,
    value: 20,
    locations: "Hagraven",
    version: "Skyrim"
  },
  {
    name: "Hagraven Feathers",
    effects: ["Damage Magicka", "Fortify Conjuration", "Frenzy", "Weakness to Shock"],
    weight: 0.1,
    value: 20,
    locations: "Hagraven",
    version: "Skyrim"
  },
  {
    name: "Hanging Moss",
    effects: ["Damage Magicka", "Fortify Health", "Damage Magicka Regen", "Fortify One-Handed"],
    weight: 0.3,
    value: 1,
    locations: "Vegetated areas, hanging in caves, from buildings",
    version: "Skyrim"
  },
  {
    name: "Hawk Beak",
    effects: ["Restore Stamina", "Resist Frost", "Fortify Carry Weight", "Resist Shock"],
    weight: 0.3,
    value: 15,
    locations: "Hawks",
    version: "Skyrim"
  },
  {
    name: "Hawk Feathers",
    effects: ["Cure Disease", "Fortify Light Armor", "Fortify One-Handed", "Fortify Sneak"],
    weight: 0.1,
    value: 15,
    locations: "Hawks",
    version: "Skyrim"
  },
  {
    name: "Hawk's Egg",
    effects: ["Resist Magic", "Damage Magicka Regen", "Waterbreathing", "Lingering Damage Stamina"],
    weight: 0.5,
    value: 2,
    locations: "Hawk's Nest",
    version: "Skyrim Hearthfire"
  },
  {
    name: "Histcarp",
    effects: ["Restore Stamina", "Fortify Magicka", "Damage Stamina Regen", "Waterbreathing"],
    weight: 0.3,
    value: 6,
    locations: "Lakes, rivers, streams and fish barrels",
    version: "Skyrim"
  },
  {
    name: "Honeycomb",
    effects: ["Restore Stamina", "Fortify Block", "Fortify Light Armor", "Ravage Stamina"],
    weight: 1.0,
    value: 5,
    locations: "Beehive",
    version: "Skyrim"
  },
  {
    name: "Human Flesh",
    effects: ["Damage Health", "Paralysis", "Restore Magicka", "Fortify Sneak"],
    weight: 0.3,
    value: 1,
    locations: "Falmer, Vampire dens",
    version: "Skyrim"
  },
  {
    name: "Human Heart",
    effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"],
    weight: 1.0,
    value: 0,
    locations: "Falmer, Vampire dens",
    version: "Skyrim"
  },
  {
    name: "Ice Wraith Teeth",
    effects: ["Weakness to Frost", "Fortify Heavy Armor", "Invisibility", "Weakness to Fire"],
    weight: 0.3,
    value: 30,
    locations: "Ice Wraith",
    version: "Skyrim"
  },
  {
    name: "Imp Stool",
    effects: ["Damage Health", "Lingering Damage Health", "Paralysis", "Restore Health"],
    weight: 0.3,
    value: 0,
    locations: "Mushroom clusters near caves or dungeons",
    version: "Skyrim"
  },
  {
    name: "Jarrin Root",
    effects: ["Damage Health", "Damage Magicka", "Damage Stamina", "Damage Magicka Regen"],
    weight: 0.5,
    value: 10,
    locations: "Dark Brotherhood Quest",
    version: "Skyrim"
  },
  {
    name: "Jazbay Grapes",
    effects: ["Weakness to Magic", "Fortify Magicka", "Regenerate Magicka", "Ravage Health"],
    weight: 0.2,
    value: 1,
    locations: "Hydro-thermal regions",
    version: "Skyrim"
  },
  {
    name: "Juniper Berries",
    effects: ["Weakness to Fire", "Fortify Marksman", "Regenerate Health", "Damage Stamina Regen"],
    weight: 0.1,
    value: 1,
    locations: "Juniper Trees",
    version: "Skyrim"
  },
  {
    name: "Large Antlers",
    effects: ["Restore Stamina", "Fortify Stamina", "Slow", "Damage Stamina Regen"],
    weight: 0.1,
    value: 2,
    locations: "Deer, Elk",
    version: "Skyrim"
  },
  {
    name: "Lavender",
    effects: ["Resist Magic", "Fortify Stamina", "Ravage Magicka", "Fortify Conjuration"],
    weight: 0.1,
    value: 1,
    locations: "Outdoors in clumps",
    version: "Skyrim"
  },
  {
    name: "Luna Moth Wing",
    effects: ["Damage Magicka", "Fortify Light Armor", "Regenerate Health", "Invisibility"],
    weight: 0.1,
    value: 5,
    locations: "Luna Moth",
    version: "Skyrim"
  },
  {
    name: "Moon Sugar",
    effects: ["Weakness to Fire", "Resist Frost", "Restore Magicka", "Regenerate Magicka"],
    weight: 0.3,
    value: 50,
    locations: "Khajiit Caravans",
    version: "Skyrim"
  },
  {
    name: "Mora Tapinella",
    effects: ["Restore Magicka", "Lingering Damage Health", "Regenerate Stamina", "Fortify Illusion"],
    weight: 0.3,
    value: 4,
    locations: "Dead Trees",
    version: "Skyrim"
  },
  {
    name: "Mudcrab Chitin",
    effects: ["Restore Stamina", "Cure Disease", "Resist Poison", "Resist Fire"],
    weight: 0.3,
    value: 2,
    locations: "Mudcrabs",
    version: "Skyrim"
  },
  {
    name: "Namira's Rot",
    effects: ["Damage Magicka", "Fortify Lockpicking", "Fear", "Regenerate Health"],
    weight: 0.3,
    value: 0,
    locations: "Caves",
    version: "Skyrim"
  },
  {
    name: "Netch Jelly",
    effects: ["Paralysis", "Fortify Carry Weight", "Restore Stamina", "Fear"],
    weight: 0.5,
    value: 20,
    locations: "Netch",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Nightshade",
    effects: ["Damage Health", "Damage Magicka Regen", "Lingering Damage Stamina", "Fortify Destruction"],
    weight: 0.1,
    value: 8,
    locations: "Graveyards, undead areas",
    version: "Skyrim"
  },
  {
    name: "Nirnroot",
    effects: ["Damage Health", "Damage Stamina", "Invisibility", "Resist Magic"],
    weight: 0.2,
    value: 10,
    locations: "Near water",
    version: "Skyrim"
  },
  {
    name: "Nordic Barnacle",
    effects: ["Damage Magicka", "Waterbreathing", "Regenerate Health", "Fortify Pickpocket"],
    weight: 0.2,
    value: 5,
    locations: "Underwater",
    version: "Skyrim"
  },
  {
    name: "Orange Dartwing",
    effects: ["Restore Stamina", "Ravage Magicka", "Fortify Pickpocket", "Lingering Damage Health"],
    weight: 0.1,
    value: 1,
    locations: "Hovering above water",
    version: "Skyrim"
  },
  {
    name: "Pearl",
    effects: ["Restore Stamina", "Fortify Block", "Restore Magicka", "Resist Shock"],
    weight: 0.1,
    value: 2,
    locations: "Satchels, Pearl Oyster",
    version: "Skyrim"
  },
  {
    name: "Pine Thrush Egg",
    effects: ["Restore Stamina", "Fortify Lockpicking", "Weakness to Poison", "Resist Shock"],
    weight: 0.5,
    value: 2,
    locations: "Nests in forests",
    version: "Skyrim"
  },
  {
    name: "Poison Bloom",
    effects: ["Damage Health", "Slow", "Fortify Carry Weight", "Fear"],
    weight: 0.3,
    value: 5,
    locations: "Darkfall Cave",
    version: "Skyrim Dawnguard"
  },
  {
    name: "Powdered Mammoth Tusk",
    effects: ["Restore Stamina", "Fortify Sneak", "Weakness to Fire", "Fear"],
    weight: 0.1,
    value: 2,
    locations: "Giant Camps",
    version: "Skyrim"
  },
  {
    name: "Purple Mountain Flower",
    effects: ["Restore Stamina", "Fortify Sneak", "Lingering Damage Magicka", "Resist Frost"],
    weight: 0.1,
    value: 2,
    locations: "Mountain flower clumps",
    version: "Skyrim"
  },
  {
    name: "Red Mountain Flower",
    effects: ["Restore Magicka", "Ravage Magicka", "Fortify Magicka", "Damage Health"],
    weight: 0.1,
    value: 2,
    locations: "Mountain flower clumps",
    version: "Skyrim"
  },
  {
    name: "River Betty",
    effects: ["Damage Health", "Fortify Alteration", "Slow", "Fortify Carry Weight"],
    weight: 0.3,
    value: 15,
    locations: "Lakes, rivers, streams and fish barrels",
    version: "Skyrim"
  },
  {
    name: "Rock Warbler Egg",
    effects: ["Restore Health", "Fortify One-Handed", "Damage Stamina", "Weakness to Magic"],
    weight: 0.5,
    value: 2,
    locations: "Rock Warbler Nest",
    version: "Skyrim"
  },
  {
    name: "Sabre Cat Tooth",
    effects: ["Restore Stamina", "Fortify Heavy Armor", "Fortify Smithing", "Weakness to Poison"],
    weight: 0.1,
    value: 2,
    locations: "Sabre Cat, Frost Sabre Cat",
    version: "Skyrim"
  },
  {
    name: "Salmon Roe",
    effects: ["Restore Stamina", "Waterbreathing", "Fortify Magicka", "Regenerate Magicka"],
    weight: 0.2,
    value: 5,
    locations: "Salmon jumping up falls, Kitchen of a Homestead",
    version: "Skyrim Hearthfire"
  },
  {
    name: "Salt Pile",
    effects: ["Weakness to Magic", "Fortify Restoration", "Slow", "Regenerate Magicka"],
    weight: 0.2,
    value: 2,
    locations: "Merchants, containers, near cooking places",
    version: "Skyrim"
  },
  {
    name: "Scaly Pholiota",
    effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Stamina", "Fortify Carry Weight"],
    weight: 0.3,
    value: 4,
    locations: "Dead birch trees",
    version: "Skyrim"
  },
  {
    name: "Scathecraw",
    effects: ["Ravage Health", "Ravage Stamina", "Ravage Magicka", "Lingering Damage Health"],
    weight: 0.1,
    value: 1,
    locations: "Harvested all over Solstheim",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Silverside Perch",
    effects: ["Restore Stamina", "Damage Stamina Regen", "Ravage Health", "Resist Frost"],
    weight: 0.3,
    value: 15,
    locations: "Lakes, rivers, streams and fish barrels",
    version: "Skyrim"
  },
  {
    name: "Skeever Tail",
    effects: ["Damage Stamina Regen", "Ravage Health", "Damage Health", "Fortify Light Armor"],
    weight: 0.2,
    value: 3,
    locations: "Skeever",
    version: "Skyrim"
  },
  {
    name: "Slaughterfish Egg",
    effects: ["Resist Poison", "Fortify Pickpocket", "Lingering Damage Health", "Fortify Stamina"],
    weight: 0.2,
    value: 3,
    locations: "Underwater",
    version: "Skyrim"
  },
  {
    name: "Slaughterfish Scales",
    effects: ["Resist Frost", "Lingering Damage Health", "Fortify Heavy Armor", "Fortify Block"],
    weight: 0.1,
    value: 3,
    locations: "Slaughterfish",
    version: "Skyrim"
  },
  {
    name: "Small Antlers",
    effects: ["Weakness to Poison", "Fortify Restoration", "Lingering Damage Stamina", "Damage Health"],
    weight: 0.1,
    value: 2,
    locations: "Elk",
    version: "Skyrim"
  },
  {
    name: "Small Pearl",
    effects: ["Restore Stamina", "Fortify One-Handed", "Fortify Restoration", "Resist Frost"],
    weight: 0.1,
    value: 2,
    locations: "Pearl Oyster",
    version: "Skyrim"
  },
  {
    name: "Snowberries",
    effects: ["Resist Fire", "Fortify Enchanting", "Resist Frost", "Resist Shock"],
    weight: 0.1,
    value: 4,
    locations: "Snowberry bush, snowy areas",
    version: "Skyrim"
  },
  {
    name: "Spawn Ash",
    effects: ["Ravage Stamina", "Resist Fire", "Fortify Enchanting", "Ravage Magicka"],
    weight: 0.1,
    value: 20,
    locations: "Ash Spawn",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Spider Egg",
    effects: ["Damage Stamina", "Damage Magicka Regen", "Fortify Lockpicking", "Fortify Marksman"],
    weight: 0.2,
    value: 5,
    locations: "Spider lairs",
    version: "Skyrim"
  },
  {
    name: "Spriggan Sap",
    effects: ["Damage Magicka Regen", "Fortify Enchanting", "Fortify Smithing", "Fortify Alteration"],
    weight: 0.2,
    value: 15,
    locations: "Spriggan",
    version: "Skyrim"
  },
  {
    name: "Swamp Fungal Pod",
    effects: ["Resist Shock", "Lingering Damage Magicka", "Paralysis", "Restore Health"],
    weight: 0.3,
    value: 5,
    locations: "Swamps",
    version: "Skyrim"
  },
  {
    name: "Taproot",
    effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Magicka", "Restore Magicka"],
    weight: 0.5,
    value: 15,
    locations: "Spriggan",
    version: "Skyrim"
  },
  {
    name: "Thistle Branch",
    effects: ["Resist Frost", "Ravage Stamina", "Resist Poison", "Fortify Heavy Armor"],
    weight: 0.1,
    value: 1,
    locations: "Thistle Plant",
    version: "Skyrim"
  },
  {
    name: "Torchbug Thorax",
    effects: ["Restore Stamina", "Lingering Damage Magicka", "Weakness to Magic", "Fortify Stamina"],
    weight: 0.1,
    value: 1,
    locations: "Torchbugs, glowing at night",
    version: "Skyrim"
  },
  {
    name: "Trama Root",
    effects: ["Weakness to Shock", "Fortify Carry Weight", "Damage Magicka", "Slow"],
    weight: 0.2,
    value: 1,
    locations: "Harvested from ashen areas of Solstheim",
    version: "Skyrim Dragonborn"
  },
  {
    name: "Troll Fat",
    effects: ["Resist Poison", "Fortify Two-handed", "Frenzy", "Damage Health"],
    weight: 1.0,
    value: 15,
    locations: "Trolls",
    version: "Skyrim"
  },
  {
    name: "Tundra Cotton",
    effects: ["Resist Magic", "Fortify Magicka", "Fortify Block", "Fortify Barter"],
    weight: 0.1,
    value: 1,
    locations: "High mountains below snow line, tundra",
    version: "Skyrim"
  },
  {
    name: "Vampire Dust",
    effects: ["Invisibility", "Restore Magicka", "Regenerate Health", "Cure Disease"],
    weight: 0.2,
    value: 25,
    locations: "Vampires, the Silver Hand",
    version: "Skyrim"
  },
  {
    name: "Void Salts",
    effects: ["Weakness to Shock", "Resist Magic", "Damage Health", "Fortify Magicka"],
    weight: 0.2,
    value: 125,
    locations: "Storm Atronach",
    version: "Skyrim"
  },
  {
    name: "Wheat",
    effects: ["Restore Health", "Fortify Health", "Damage Stamina Regen", "Lingering Damage Magicka"],
    weight: 0.1,
    value: 5,
    locations: "Grows on farms, containers",
    version: "Skyrim"
  },
  {
    name: "White Cap",
    effects: ["Weakness to Frost", "Fortify Heavy Armor", "Restore Magicka", "Ravage Magicka"],
    weight: 0.3,
    value: 0,
    locations: "Mushroom clusters near caves or dungeons",
    version: "Skyrim"
  },
  {
    name: "Wisp Wrappings",
    effects: ["Restore Stamina", "Fortify Destruction", "Fortify Carry Weight", "Resist Magic"],
    weight: 0.1,
    value: 2,
    locations: "Wispmother",
    version: "Skyrim"
  },
  {
    name: "Yellow Mountain Flower",
    effects: ["Resist Poison", "Fortify Restoration", "Fortify Health", "Damage Stamina Regen"],
    weight: 0.1,
    value: 2,
    locations: "Darkfall Cave",
    version: "Skyrim Dawnguard"
  }
];

const RECIPES = [
  { name: "Cure Disease Potion", ingredients: ["Mudcrab Chitin", "Vampire Dust"], note: "Restore Health, Cure Disease" },
  { name: "Cure Disease Potion", ingredients: ["Charred Skeever Hide", "Mudcrab Chitin"], note: "Restore Health, Cure Disease" },
  { name: "Damage Health Poison", ingredients: ["Skeever Tail", "Void Salts"], note: "Damage Health" },
  { name: "Damage Health Poison", ingredients: ["Ectoplasm", "Troll Fat"], note: "Damage Health" },
  { name: "Damage Health Poison", ingredients: ["Skeever Tail", "Small Antlers"], note: "Damage Health" },
  { name: "Fear Poison", ingredients: ["Namira's Rot", "Blue Dartwing"], note: "Fear" },
  { name: "Fear Poison", ingredients: ["Powdered Mammoth Tusk", "Daedra Heart"], note: "Fear" },
  { name: "Fortify Carry Weight Potion", ingredients: ["Creep Cluster", "Giant's Toe"], note: "Fortify Carry Weight" },
  { name: "Fortify Carry Weight Potion", ingredients: ["Wisp Wrappings", "Scaly Pholiota"], note: "Fortify Carry Weight" },
  { name: "Frenzy Poison", ingredients: ["Blisterwort", "Falmer Ear"], note: "Frenzy" },
  { name: "Invisibility Potion", ingredients: ["Luna Moth Wing", "Chaurus Eggs"], note: "Invisibility" },
  { name: "Invisibility Potion", ingredients: ["Ice Wraith Teeth", "Chaurus Eggs"], note: "Invisibility" },
  { name: "Paralysis Poison", ingredients: ["Briar Heart", "Swamp Fungal Pod"], note: "Paralysis" },
  { name: "Paralysis Poison", ingredients: ["Canis Root", "Swamp Fungal Pod"], note: "Paralysis" },
  { name: "Resist Fire Potion", ingredients: ["Bone Meal", "Frost Salts"], note: "Resist Fire" },
  { name: "Resist Fire Potion", ingredients: ["Elves Ear", "Mudcrab Chitin"], note: "Resist Fire" },
  { name: "Resist Frost Potion", ingredients: ["Snowberries", "Purple Mountain Flower"], note: "Resist Frost" },
  { name: "Resist Poison Potion", ingredients: ["Thistle Branch", "Falmer Ear"], note: "Resist Poison" },
  { name: "Resist Shock Potion", ingredients: ["Glow Dust", "Pearl"], note: "Resist Shock" },
  { name: "Resist Shock Potion", ingredients: ["Pine Thrush Egg", "Snowberries"], note: "Resist Shock" },
  { name: "Restore Health Potion", ingredients: ["Butterfly Wing", "Blisterwort"], note: "Restore Health" },
  { name: "Restore Health Potion", ingredients: ["Blue Mountain Flower", "Eye of Sabre Cat"], note: "Restore Health" },
  { name: "Restore Health Potion", ingredients: ["Blue Dartwing", "Charred Skeever Hide"], note: "Restore Health" },
  { name: "Restore Health Potion", ingredients: ["Imp Stool", "Wheat"], note: "Restore Health" },
  { name: "Restore Magicka Potion", ingredients: ["White Cap", "Taproot"], note: "Restore Magicka" },
  { name: "Restore Magicka Potion", ingredients: ["Grass Pod", "Red Mountain Flower"], note: "Restore Magicka" },
  { name: "Restore Magicka Potion", ingredients: ["Giant Lichen", "Pearl"], note: "Restore Magicka" }
];
