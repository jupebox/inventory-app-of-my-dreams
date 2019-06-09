// import * as genresAPI from "./fakeGenreService";
const skus = [
    {
        id: 1,
        parentId: 'kirby_adventure_vv',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 2,
        parentId: 'kirby_adventure_ii',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 3,
        parentId: 'kirby_adventure_bb',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 4,
        parentId: 'kirby_adventure_gg',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 5,
        parentId: 'kirby_adventure_yy',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 6,
        parentId: 'kirby_adventure_oo',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 7,
        parentId: 'kirby_adventure_rr',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 8,
        parentId: 'kirby_adventure_fod',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 9,
        parentId: 'kirby_adventure_fod',
        type: 'sku',
        size: 'Small',
        holographic: true,
        damaged: false,
        inventory: 10
    },
    {
        id: 10,
        parentId: 'kirby_adventure_fod',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 11,
        parentId: 'kirby_adventure_fod',
        type: 'sku',
        size: 'Medium',
        holographic: true,
        damaged: false,
        inventory: 10
    },
    {
        id: 12,
        parentId: 'kirby_adventure_fod',
        type: 'sku',
        size: 'Large',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 13,
        parentId: 'kirby_adventure_fod',
        type: 'sku',
        size: 'Large',
        holographic: true,
        damaged: false,
        inventory: 10
    },
    {
        id: 14,
        parentId: 'smash_ladies_villager',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 15,
        parentId: 'smash_ladies_villager',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 16,
        parentId: 'smash_ladies_wii_fit',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 17,
        parentId: 'smash_ladies_wii_fit',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 18,
        parentId: 'smash_ladies_zelda',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 19,
        parentId: 'smash_ladies_zelda',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 20,
        parentId: 'smash_ladies_sheik',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 21,
        parentId: 'smash_ladies_sheik',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 22,
        parentId: 'smash_ladies_palutena',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 23,
        parentId: 'smash_ladies_palutena',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 24,
        parentId: 'smash_ladies_samus',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 25,
        parentId: 'smash_ladies_samus',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 26,
        parentId: 'smash_ladies_jigglypuff',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 27,
        parentId: 'smash_ladies_jigglypuff',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 28,
        parentId: 'smash_ladies_wendy',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 29,
        parentId: 'smash_ladies_wendy',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 30,
        parentId: 'smash_ladies_peach',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 31,
        parentId: 'smash_ladies_peach',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 32,
        parentId: 'smash_ladies_rosalina',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 33,
        parentId: 'smash_ladies_rosalina',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 34,
        parentId: 'smash_ladies_bayonetta',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 35,
        parentId: 'smash_ladies_bayonetta',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 36,
        parentId: 'smash_ladies_corrin',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 37,
        parentId: 'smash_ladies_corrin',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 38,
        parentId: 'smash_ladies_lucina',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 39,
        parentId: 'smash_ladies_lucina',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 40,
        parentId: 'smash_ladies_robin',
        type: 'sku',
        size: 'Small',
        holographic: false,
        damaged: false,
        inventory: 10
    },
    {
        id: 41,
        parentId: 'smash_ladies_robin',
        type: 'sku',
        size: 'Medium',
        holographic: false,
        damaged: false,
        inventory: 10
    },
];

const products = [
    {
        design: 'kirby_adventure_vv',
        type: 'design',
        medium: 'print',
        title: "Vegetable Valley",
        imageUrl: 'https://66.media.tumblr.com/312c153bf93ad3a1f557d546e879d220/tumblr_osaiwecZyn1r5lrepo1_500.jpg',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: [1]
    },
    {
        design: 'kirby_adventure_ii',
        type: 'design',
        medium: 'print',
        title: "Ice Cream Island",
        imageUrl: 'https://66.media.tumblr.com/457080ff962593804f64b8d27da75755/tumblr_osaiwecZyn1r5lrepo2_500.jpg',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: [2]
    },
    {
        design: 'kirby_adventure_bb',
        type: 'design',
        medium: 'print',
        title: "Butter Building",
        imageUrl: 'https://66.media.tumblr.com/c043d4e89eeec1494fc3e1a78db09b46/tumblr_osaiwecZyn1r5lrepo3_500.jpg',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: [3]
    },
    {
        design: 'kirby_adventure_gg',
        type: 'design',
        medium: 'print',
        title: "Grape Garden",
        imageUrl: 'https://66.media.tumblr.com/b03fe57f27d3591d2ba711d722a4e4ae/tumblr_osaiwecZyn1r5lrepo4_500.jpg',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: [4]
    },
    {
        design: 'kirby_adventure_yy',
        type: 'design',
        medium: 'print',
        title: "Yogurt Yard",
        imageUrl: 'https://66.media.tumblr.com/d43b09992e40ad9e94ea98ae2dec364a/tumblr_osaiwecZyn1r5lrepo5_500.jpg',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: [5]
    },
    {
        design: 'kirby_adventure_oo',
        type: 'design',
        medium: 'print',
        title: "Orange Ocean",
        imageUrl: 'https://66.media.tumblr.com/171ce3b1be6c4b2d7f0ab58b5f0b844c/tumblr_osaiwecZyn1r5lrepo6_500.jpg',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: [6]
    },
    {
        design: 'kirby_adventure_rr',
        type: 'design',
        medium: 'print',
        title: "Rainbow Resort",
        imageUrl: 'https://66.media.tumblr.com/eae79b467e17339500da852c185b335a/tumblr_osaiwecZyn1r5lrepo7_500.jpg',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: [7]
    },
    {
        design: 'kirby_adventure_fod',
        type: 'design',
        medium: 'print',
        title: "Fountain of Dreams",
        imageUrl: 'https://66.media.tumblr.com/933a23b221fb4cc4148002b3c18190e2/tumblr_osaiwecZyn1r5lrepo8_500.jpg',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: [8,9,10,11,12,13]
    },
    {
        design: 'smash_ladies_villager',
        type: 'design',
        medium: 'print',
        title: "Smash - Villager",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [14, 15]
    },
    {
        design: 'smash_ladies_wii_fit',
        type: 'design',
        medium: 'print',
        title: "Smash - Wii Fit Trainer",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [16, 17]
    },
    {
        design: 'smash_ladies_zelda',
        type: 'design',
        medium: 'print',
        title: "Smash - Princess Zelda",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [18,19]
    },
    {
        design: 'smash_ladies_sheik',
        type: 'design',
        medium: 'print',
        title: "Smash - Sheik",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [20,21]
    },
    {
        design: 'smash_ladies_palutena',
        type: 'design',
        medium: 'print',
        title: "Smash - Palutena",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [22,23]
    },
    {
        design: 'smash_ladies_samus',
        type: 'design',
        medium: 'print',
        title: "Smash - Samus",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [24,25]
    },
    {
        design: 'smash_ladies_jigglypuff',
        type: 'design',
        medium: 'print',
        title: "Smash - Jigglypuff",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [26, 27]
    },
    {
        design: 'smash_ladies_wendy',
        type: 'design',
        medium: 'print',
        title: "Smash - Wendy Koopa",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [28,29]
    },
    {
        design: 'smash_ladies_peach',
        type: 'design',
        medium: 'print',
        title: "Smash - Princess Peach",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [30,31]
    },
    {
        design: 'smash_ladies_rosalina',
        type: 'design',
        medium: 'print',
        title: "Smash - Princess Rosalina",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [32,33]
    },
    {
        design: 'smash_ladies_bayonetta',
        type: 'design',
        medium: 'print',
        title: "Smash - Bayonetta",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [34, 35]
    },
    {
        design: 'smash_ladies_corrin',
        type: 'design',
        medium: 'print',
        title: "Smash - Corrin",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [36,37]
    },
    {
        design: 'smash_ladies_lucina',
        type: 'design',
        medium: 'print',
        title: "Smash - Lucina",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [38,39]
    },
    {
        design: 'smash_ladies_robin',
        type: 'design',
        medium: 'print',
        title: "Smash - Robin",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: [40,41]
    },
    {
        design: 'kirby_parasol',
        type: 'design',
        medium: 'print',
        title: "Kirby - Paraluna",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Small', 'Smedium', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'kirby_wispy_woods',
        type: 'design',
        medium: 'print',
        title: "Kirby - Wispy Woods",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'kirby_crystal_shards',
        type: 'design',
        medium: 'print',
        title: "Kirby - Crystal Shards Powers",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'mario_rosalina',
        type: 'design',
        medium: 'print',
        title: "Mario - Casual Rosalina",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini']
        },
        children: []
    },
    {
        design: 'mario_geno',
        type: 'design',
        medium: 'print',
        title: "Mario - Geno",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'mario_birds',
        type: 'design',
        medium: 'print',
        title: "Mario - Birdwatching",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Glossy'], // maybe don't break glossy out
            sizes: ['Mini', 'Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'mario_paper_battle',
        type: 'design',
        medium: 'print',
        title: "Paper Mario - Boss Rush",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'mario_paper_luigi',
        type: 'design',
        medium: 'print',
        title: "Paper Mario - Luigi Parade",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'mario_paper_peach',
        type: 'design',
        medium: 'print',
        title: "Paper Mario - A Piece of Cake",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'pokemon_sweets_pumpkaboo',
        type: 'design',
        medium: 'print',
        title: "Pokemon Sweets - Pumpkaboo Cupcakes",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'pokemon_sweets_slurpuff',
        type: 'design',
        medium: 'print',
        title: "Pokemon Sweets - Slurpuff Parfait",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'pokemon_sweets_vulpix',
        type: 'design',
        medium: 'print',
        title: "Pokemon Sweets - Vulpix Cake",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'pokemon_sweets_raichu',
        type: 'design',
        medium: 'print',
        title: "Pokemon Sweets - Alolan Raichu Pancakes",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'pokemon_sweets_bellossom',
        type: 'design',
        medium: 'print',
        title: "Pokemon Sweets - Bellossom Fruit Tart",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Large']
        },
        children: []
    },
    {
        design: 'pokemon_sweets_macarons',
        type: 'design',
        medium: 'print',
        title: "Pokemon Sweets - Macarons",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'pokemon_lilly',
        type: 'design',
        medium: 'print',
        title: "Pokemon - Lilly & Nebby",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'pokemon_snap',
        type: 'design',
        medium: 'print',
        title: "Pokemon Snap - Wonderful!",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Mini', 'Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'banjo_kazooie',
        type: 'design',
        medium: 'print',
        title: "Banjo-Kazooie",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'zelda_malon',
        type: 'design',
        medium: 'print',
        title: "Zelda Songs - Epona's Song",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'zelda_saria',
        type: 'design',
        medium: 'print',
        title: "Zelda Songs - Saria's Song",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'ice_climbers',
        type: 'design',
        medium: 'print',
        title: "Ice Climbers - Northern Lights",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Small', 'Smedium', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'harvest_moon',
        type: 'design',
        medium: 'print',
        title: "Harvest Moon - Bountiful",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Thin'],
            sizes: ['Smedium']
        },
        children: []
    },
    {
        design: 'kingdom_hearts_beach',
        type: 'design',
        medium: 'print',
        title: "Kingdom Hearts - Ice Cream",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Gen 1",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Large']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Gen 2",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Thin'],
            sizes: ['Large']
        },
        children: []
    },
    {
        design: 'deltarune_cake',
        type: 'design',
        medium: 'print',
        title: "Deltarune - Never Enough Cake",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'undertale_frisk_flowey',
        type: 'design',
        medium: 'print',
        title: "Undertale - Frisk & Flowey",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small', 'Smedium', 'Medium']
        },
        children: []
    },
    {
        design: 'undertale_cavestory',
        type: 'design',
        medium: 'print',
        title: "Undertale & CaveStory - Let's Go Together",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Thin'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'cavestory_quote',
        type: 'design',
        medium: 'print',
        title: "CaveStory - Pipe Dreams",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Medium']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_a',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Arbok",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_b',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Beedrill",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_c',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Charizard",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_d',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Doduo",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_e',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Eevee",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_f',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Farfetch'd",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_g',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Geodude",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_h',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Haunter",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_i',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Ivysaur",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_j',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Jigglypuff",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_k',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Krabby",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_l',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Lapras",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_m',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Meowth",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_n',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Nidoran",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_o',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Oddish",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_p',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Pidgeot",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_q',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Quick Attack (Rattata)",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_r',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Rapidash",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_s',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Squirtle",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_t',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Tentacruel",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_u',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Under the Truck (Mew)",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_v',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Vulpix",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_w',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Weezing",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_x',
        type: 'design',
        medium: 'print',
        title: "Pokebet - ...Slowpoke (X)",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_y',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Yellow Version (Pikachu)",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen1_z',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Zubat",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },

    {
        design: 'pokemon_alphabet_gen2_a',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Ampharos",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_b',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Bellossom",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_c',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Chikorita",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_d',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Delibird",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_e',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Espeon",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_f',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Feraligatr",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_g',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Girafarig",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_h',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Houndoom",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_i',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Igglybuff",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_j',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Jumpluff",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_k',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Kingdra",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_l',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Larvitar",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_m',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Marill",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_n',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Noctowl",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_o',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Octillery",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_p',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Phanpy",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_q',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Quilava",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_r',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Red Gyarados",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_s',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Sneasel",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_t',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Togetic",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_u',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Umbreon",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_v',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Vegatation...? (Sudowoodo)",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_w',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Wooper",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_x',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Xatu",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_y',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Yanma",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },
    {
        design: 'pokemon_alphabet_gen2_z',
        type: 'design',
        medium: 'print',
        title: "Pokebet - Zzz... (Baby Pokemon)",
        imageUrl: '',
        hideFromList: true,
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small']
        },
        children: []
    },

    {
        design: 'gravity_falls_dipper',
        type: 'design',
        medium: 'print',
        title: "Gravity Falls - Dipper as Link",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small', 'Medium']
        },
        children: []
    },
    {
        design: 'gravity_falls_mabel',
        type: 'design',
        medium: 'print',
        title: "Gravity Falls - Mabel as Link",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small', 'Medium']
        },
        children: []
    },
    {
        design: 'gravity_falls_bill',
        type: 'design',
        medium: 'print',
        title: "Gravity Falls - M'Geddon",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'gravity_falls_bill_v1',
        type: 'design',
        medium: 'print',
        title: "Gravity Falls - M'Geddon (old version)",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Thin'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'shera_shitpost_catra',
        type: 'design',
        medium: 'print',
        title: "She-Ra - Hey Adora ;P",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini']
        },
        children: []
    },
    {
        design: 'shera_shitpost_adora',
        type: 'design',
        medium: 'print',
        title: "She-Ra - Hey Catra. :)",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini']
        },
        children: []
    },
    {
        design: 'sherlock_scarf',
        type: 'design',
        medium: 'print',
        title: "Sherlock - Sharing is Caring",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'sherlock_wedding',
        type: 'design',
        medium: 'print',
        title: "Sherlock - Wedding",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'steven_universe_catfingers',
        type: 'design',
        medium: 'print',
        title: "Steven Universe - Neko Atsume Fingers",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'madoka_magica_quote',
        type: 'design',
        medium: 'print',
        title: "Madoka Magica - Don't Lose Hope",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'inuyasha_sesshoumaru_group',
        type: 'design',
        medium: 'print',
        title: "Inuyasha - Sesshoumaru's Party",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'dennou_coil_circle_of_children',
        type: 'design',
        medium: 'print',
        title: "Dennou Coil - A Circle of Children",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },

    {
        design: 'natsume_yuujinchou_return_name',
        type: 'design',
        medium: 'print',
        title: "Natsume Yuujinchou - Returning Your Name",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'ghibli_arrietty',
        type: 'design',
        medium: 'print',
        title: "Ghibli Movies - Arrietty",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'ghibli_cat_returns',
        type: 'design',
        medium: 'print',
        title: "Ghibli Movies - The Cat Returns",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Large']
        },
        children: []
    },
    {
        design: 'nichijou_skyfall',
        type: 'design',
        medium: 'print',
        title: "Nichijou - Zzz (Falling for You)",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Small', 'Large']
        },
        children: []
    },
    {
        design: 'magical_girls_amu',
        type: 'design',
        medium: 'print',
        title: "Magical Girls - Amu Hinamori",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'magical_girls_sakura',
        type: 'design',
        medium: 'print',
        title: "Magical Girls - Sakura Kinomoto",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'magical_girls_ahiru',
        type: 'design',
        medium: 'print',
        title: "Magical Girls - Ahiru",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'magical_girls_rue',
        type: 'design',
        medium: 'print',
        title: "Magical Girls - Rue",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'magical_girls_maya',
        type: 'design',
        medium: 'print',
        title: "Magical Girls - Maya Fey",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'magical_girls_akko',
        type: 'design',
        medium: 'print',
        title: "Magical Girls - Akko Kagari",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'magical_girls_kagome',
        type: 'design',
        medium: 'print',
        title: "Magical Girls - Kagome Higurashi",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'magical_girls_full_moon',
        type: 'design',
        medium: 'print',
        title: "Magical Girls - Mitsuki Koyama",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'cardcaptor_sakura_cashcaptors',
        type: 'design',
        medium: 'print',
        title: "Cardcaptor Sakura - Cashcaptors",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'hunter_x_pokemon_gon',
        type: 'design',
        medium: 'print',
        title: "Hunter x Pokemon - Gon",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'hunter_x_pokemon_killua',
        type: 'design',
        medium: 'print',
        title: "Hunter x Pokemon - Killua",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'hunter_x_pokemon_alluka',
        type: 'design',
        medium: 'print',
        title: "Hunter x Pokemon - Alluka",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'hunter_x_pokemon_leorio',
        type: 'design',
        medium: 'print',
        title: "Hunter x Pokemon - Leorio",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'hunter_x_pokemon_kurapika',
        type: 'design',
        medium: 'print',
        title: "Hunter x Pokemon - Kurapika",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'cats_and_tea_rain',
        type: 'design',
        medium: 'print',
        title: "Cats & Tea - Rainy Afternoon",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'cats_and_tea_fire',
        type: 'design',
        medium: 'print',
        title: "Cats & Tea - By the Fire",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'cats_and_tea_fire_v1',
        type: 'design',
        medium: 'print',
        title: "Cats & Tea - By the Fire (dark version)",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'cats_and_tea_cafe',
        type: 'design',
        medium: 'print',
        title: "Cats & Tea - Cafe",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'cats_and_tea_sadness',
        type: 'design',
        medium: 'print',
        title: "Cats & Tea - It's Going to be Okay",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Large']
        },
        children: []
    },
    {
        design: 'bees_beelines',
        type: 'design',
        medium: 'print',
        title: "Bees - Beelines",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small']
        },
        children: []
    },
    {
        design: 'bees_dance',
        type: 'design',
        medium: 'print',
        title: "Bees - Dance",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'bees_felt',
        type: 'design',
        medium: 'print',
        title: "Bees - Felt",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'bees_fruit',
        type: 'design',
        medium: 'print',
        title: "Bees - Fruit",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'bees_ribbon',
        type: 'design',
        medium: 'print',
        title: "Bees - Ribbon",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'tea_makes_me_happy',
        type: 'design',
        medium: 'print',
        title: "Tea Makes Me Happy",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'all_you_need_is_cake',
        type: 'design',
        medium: 'print',
        title: "All You Need is Cake",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Small', 'Medium']
        },
        children: []
    },
    {
        design: 'mushishi_light_river',
        type: 'design',
        medium: 'print',
        title: "Mushishi - Light River",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Medium', 'Large']
        },
        children: []
    },
    {
        design: 'princess_tutu_healing_touch',
        type: 'design',
        medium: 'print',
        title: "Princess Tutu - Healing Touch",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini', 'Small', 'Medium', 'Large']
        },
        children: []
    },
    {
        design: 'heck_bird',
        type: 'design',
        medium: 'print',
        title: "Heck! (Bird)",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte'],
            sizes: ['Mini']
        },
        children: []
    },
    {
        design: 'loaf_cat',
        type: 'design',
        medium: 'print',
        title: "Toasty Loaf (Cat)",
        imageUrl: '',
        productOptions: {
            finishes: ['Matte', 'Holographic'],
            sizes: ['Mini']
        },
        children: []
    },
    {
        design: 'harvest_moon_bookmark',
        type: 'design',
        medium: 'bookmark',
        title: "Harvest Moon - Bountiful (Bookmark)",
        imageUrl: '',
        productOptions: {
            sides: ['Double-sided', 'Front', 'Back']
        },
        children: []
    },
    {
        design: 'bomberman_bookmark',
        type: 'design',
        medium: 'bookmark',
        title: "Bomberman 64 (Bookmark)",
        imageUrl: '',
        productOptions: {
            sides: ['Double-sided']
        },
        children: []
    },
    {
        design: 'yoshi_bookmark',
        type: 'design',
        medium: 'bookmark',
        title: "Yoshi's Story (Bookmark)",
        imageUrl: '',
        productOptions: {
            sides: ['Double-sided', 'Front']
        },
        children: []
    },
    {
        design: 'kirby_bookmark',
        type: 'design',
        medium: 'bookmark',
        title: "Kirby Crystal Shards (Bookmark)",
        imageUrl: '',
        productOptions: {
            sides: ['Double-sided']
        },
        children: []
    },
    {
        design: 'monkey_island_bookmark',
        type: 'design',
        medium: 'bookmark',
        title: "The Curse of Monkey Island (Bookmark)",
        imageUrl: '',
        productOptions: {
            sides: ['Double-sided']
        },
        children: []
    },
    {
        design: 'cat_cafe_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Cozy Cat Cafe (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good', 'Misprint']
        },
        children: []
    },
    {
        design: 'pokemon_birds_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Pokemon - Birds & Beans (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good']
        },
        children: []
    },
    {
        design: 'zelda_emojis_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Zelda - Wind Waker Emojis (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good']
        },
        children: []
    },
    {
        design: 'zelda_phrases_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Zelda - Phrases (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good']
        },
        children: []
    },
    {
        design: 'bees_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Busy Bees (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good', 'Misprint']
        },
        children: []
    },
    {
        design: 'kirby_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Kirby (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good', 'Misprint']
        },
        children: []
    },
    {
        design: 'zelda_rupees_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Zelda - Rupees (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good']
        },
        children: []
    },
    {
        design: 'zelda_fairies_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Zelda - Fairies (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good']
        },
        children: []
    },
    {
        design: 'zelda_spirit_stones_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Zelda - Spiritual Stones (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good']
        },
        children: []
    },
    {
        design: 'zelda_items_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Zelda - Power Up! (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good']
        },
        children: []
    },
    {
        design: 'bees_accessories_stickers',
        type: 'design',
        medium: 'stickers',
        title: "Busy Bees - Accessories Only (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good']
        },
        children: []
    },
    {
        design: 'bees_stickers_v1',
        type: 'design',
        medium: 'stickers',
        title: "Busy Bees - Bees Only (Stickers)",
        imageUrl: '',
        productOptions: {
            quality: ['Good']
        },
        children: []
    },
    {
        design: 'single_sticker',
        type: 'design',
        medium: 'stickers',
        title: "Single Sticker",
        imageUrl: '',
        productOptions: {
            size: ['Tiny', 'Small', 'Large']
        },
        children: []
    },
    {
        design: 'bee_lines_zine',
        type: 'design',
        medium: 'booklet',
        title: "Bee Lines (Zine)",
        imageUrl: '',
        children: []
    },
    {
        design: 'sweets_zine',
        type: 'design',
        medium: 'booklet',
        title: "Pokemon - Sweets (Zine)",
        imageUrl: '',
        children: []
    },
    {
        design: 'tayce_t_zine',
        type: 'design',
        medium: 'booklet',
        title: "Paper Mario - Tayce T (Comic)",
        imageUrl: '',
        children: []
    },
    {
        design: 'bee_stationery',
        type: 'design',
        medium: 'stationery',
        title: "Bees - Stationery",
        imageUrl: '',
        productOptions: {
            color: ['Blue', 'Pink', 'Yellow', 'Combo'],
            size: ['6 sheets', '12 sheets']
        },
        children: []
    },
    {
        design: 'undertale_button_frisk',
        type: 'design',
        medium: 'button',
        title: "Undertale - Frisk (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_chara',
        type: 'design',
        medium: 'button',
        title: "Undertale - Chara (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_flowey',
        type: 'design',
        medium: 'button',
        title: "Undertale - Flowey (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },

    {
        design: 'undertale_button_asriel',
        type: 'design',
        medium: 'button',
        title: "Undertale - Asriel (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_toriel',
        type: 'design',
        medium: 'button',
        title: "Undertale - Toriel (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_asgore',
        type: 'design',
        medium: 'button',
        title: "Undertale - Asgore (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_papyrus',
        type: 'design',
        medium: 'button',
        title: "Undertale - Papyrus (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_sans',
        type: 'design',
        medium: 'button',
        title: "Undertale - Sans (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_undyne',
        type: 'design',
        medium: 'button',
        title: "Undertale - Undyne (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_alphys',
        type: 'design',
        medium: 'button',
        title: "Undertale - Alphys (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_mettaton_humanoid',
        type: 'design',
        medium: 'button',
        title: "Undertale - Mettaton (Humanoid) (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_mettaton_box',
        type: 'design',
        medium: 'button',
        title: "Undertale - Mettaton (Box) (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_muffet',
        type: 'design',
        medium: 'button',
        title: "Undertale - Muffet (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_bratty',
        type: 'design',
        medium: 'button',
        title: "Undertale - Bratty (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_catty',
        type: 'design',
        medium: 'button',
        title: "Undertale - Catty (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_nice_cream',
        type: 'design',
        medium: 'button',
        title: "Undertale - Nice Cream Guy (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_burgerpants',
        type: 'design',
        medium: 'button',
        title: "Undertale - Burgerpants (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_temmie',
        type: 'design',
        medium: 'button',
        title: "Undertale - Temmie (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_grillby',
        type: 'design',
        medium: 'button',
        title: "Undertale - Grillby (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_monster_kid',
        type: 'design',
        medium: 'button',
        title: "Undertale - Monster Kid (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_napstablook',
        type: 'design',
        medium: 'button',
        title: "Undertale - Napstablook (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_lesser_dog_head',
        type: 'design',
        medium: 'button',
        title: "Undertale - Lesser Dog Head (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_lesser_dog_bent_neck',
        type: 'design',
        medium: 'button',
        title: "Undertale - Lesser Dog Bent Neck (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_lesser_dog_straight_neck',
        type: 'design',
        medium: 'button',
        title: "Undertale - Lesser Dog Straight Neck (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'undertale_button_lesser_dog_body',
        type: 'design',
        medium: 'button',
        title: "Undertale - Lesser Dog Body (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_goombario',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Goombario (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_kooper',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Kooper (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_bombette',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Bombette (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_parakarry',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Parakarry (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_bow',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Lady Bow (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_watt',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Watt (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_sushie',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Sushie (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_lakilester',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Lakilester (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_peach',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Peach & Twink (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_luigi',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Luigi (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'paper_mario_button_mario',
        type: 'design',
        medium: 'button',
        title: "Paper Mario - Mario (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_goomba',
        type: 'design',
        medium: 'button',
        title: "Mario - Goomba (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_koopa',
        type: 'design',
        medium: 'button',
        title: "Mario - Koopa (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_boo',
        type: 'design',
        medium: 'button',
        title: "Mario - Boo (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_lakitu',
        type: 'design',
        medium: 'button',
        title: "Mario - Lakitu (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_piranha',
        type: 'design',
        medium: 'button',
        title: "Mario - Piranha Plant (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_shyguy',
        type: 'design',
        medium: 'button',
        title: "Mario - Shy Guy (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_buzzy',
        type: 'design',
        medium: 'button',
        title: "Mario - Buzzy Beetle (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_blooper',
        type: 'design',
        medium: 'button',
        title: "Mario - Blooper (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_chomp',
        type: 'design',
        medium: 'button',
        title: "Mario - Chain Chomp (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'mario_button_bobomb',
        type: 'design',
        medium: 'button',
        title: "Mario - Bobomb (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_kirby',
        type: 'design',
        medium: 'button',
        title: "Kirby - Kirby (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_waddle_dee',
        type: 'design',
        medium: 'button',
        title: "Kirby - Waddle Dee (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_dedede',
        type: 'design',
        medium: 'button',
        title: "Kirby - King Dedede (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_metaknight',
        type: 'design',
        medium: 'button',
        title: "Kirby - Metaknight (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_magolor',
        type: 'design',
        medium: 'button',
        title: "Kirby - Magolor (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_waddle_doo',
        type: 'design',
        medium: 'button',
        title: "Kirby - Waddle Doo (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_bronto',
        type: 'design',
        medium: 'button',
        title: "Kirby - Bronto Burt (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_scarfy_cute',
        type: 'design',
        medium: 'button',
        title: "Kirby - Scarfy (Cute) (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_scarfy_terrifying',
        type: 'design',
        medium: 'button',
        title: "Kirby - Scarfy (Terrifying) (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_sparky',
        type: 'design',
        medium: 'button',
        title: "Kirby - Sparky (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_chilly',
        type: 'design',
        medium: 'button',
        title: "Kirby - Chilly (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'kirby_button_poppy',
        type: 'design',
        medium: 'button',
        title: "Kirby - Poppy Bros Jr (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'touhou_button_suika',
        type: 'design',
        medium: 'button',
        title: "Touhou - Suika (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'touhou_button_reimu',
        type: 'design',
        medium: 'button',
        title: "Touhou - Reimu (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'touhou_button_koishi',
        type: 'design',
        medium: 'button',
        title: "Touhou - Koishi (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'touhou_button_youmu',
        type: 'design',
        medium: 'button',
        title: "Touhou - Youmu (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'touhou_button_sakuya',
        type: 'design',
        medium: 'button',
        title: "Touhou - Sakuya (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'touhou_button_marisa',
        type: 'design',
        medium: 'button',
        title: "Touhou - Marisa (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'otgw_button_wirt',
        type: 'design',
        medium: 'button',
        title: "Over the Garden Wall - Wirt (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'otgw_button_greg',
        type: 'design',
        medium: 'button',
        title: "Over the Garden Wall - Greg (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'otgw_button_beatrice',
        type: 'design',
        medium: 'button',
        title: "Over the Garden Wall - Beatrice (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'otgw_button_frog',
        type: 'design',
        medium: 'button',
        title: "Over the Garden Wall - Frog (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'otgw_button_beast',
        type: 'design',
        medium: 'button',
        title: "Over the Garden Wall - Beast (Button)",
        imageUrl: '',
        hideFromList: true,
        children: []
    },
    {
        design: 'sonic_silver_button',
        type: 'design',
        medium: 'button',
        title: "Sonic - Silver (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'cavestory_quote_button',
        type: 'design',
        medium: 'button',
        title: "CaveStory - Quote (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'bastion_kid_button',
        type: 'design',
        medium: 'button',
        title: "Bastion - The Kid (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'pokemon_zubat_azumarill_button',
        type: 'design',
        medium: 'button',
        title: "Pokemon - Zubat & Azumarill (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'sailor_moon_luna_button',
        type: 'design',
        medium: 'button',
        title: "Sailor Moon - Luna (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'cardcaptor_sakura_kero_button',
        type: 'design',
        medium: 'button',
        title: "Cardcaptor Sakura - Kero (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'cat_yarn_button',
        type: 'design',
        medium: 'button',
        title: "Cat with Yarn (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'cat_loaf_button',
        type: 'design',
        medium: 'button',
        title: "Toasy Loaf Cat (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'succulent_cactus_button',
        type: 'design',
        medium: 'button',
        title: "Fabulous Cactus (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'succulent_aloe_button',
        type: 'design',
        medium: 'button',
        title: "Aloen Time (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'bird_branch_button',
        type: 'design',
        medium: 'button',
        title: "Bird in a Tree (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'penguin_button',
        type: 'design',
        medium: 'button',
        title: "Penguins (Button)",
        imageUrl: '',
        children: []
    },
    {
        design: 'pokemon_go_charm',
        type: 'design',
        medium: 'charm',
        title: "Pokemon Go! (Charm)",
        imageUrl: '',
        children: []
    },
    {
        design: 'pokemon_vulpix_charm',
        type: 'design',
        medium: 'charm',
        title: "Pokemon - Vulpix (Charm)",
        imageUrl: '',
        children: []
    },
    {
        design: 'kirby_charm',
        type: 'design',
        medium: 'charm',
        title: "Kirby (Charm)",
        imageUrl: '',
        children: []
    },
    {
        design: 'commission',
        type: 'design',
        medium: 'commission',
        title: "Commission",
        imageUrl: '',
        productOptions: {
            medium: ['Sketch', 'Lines', 'Lines & Crayon', 'Marker'],
            sizes: ['Small', 'Medium', 'Large']
        },
        children: []
    },
];


const sets = [
    {
        id: 1,
        title: "Kirby's Adventure Postcard Set",
        skuIds: [1, 2, 3, 4, 5, 6, 7, 8],
        price: 30,
        discount: false
    },
    {
        id: 2,
        title: "Kirby's Adventure Postcard Set - Holographic",
        skuIds: [1, 2, 3, 4, 5, 6, 7, 9],
        price: 30,
        discount: false
    }
]

// export function getMovies() {
//   return movies;
// }

// export function getMovie(id) {
//   return movies.find(m => m._id === id);
// }

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
