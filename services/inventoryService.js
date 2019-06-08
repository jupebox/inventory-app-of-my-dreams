// import * as genresAPI from "./fakeGenreService";
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

];

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
        id: 1,
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
