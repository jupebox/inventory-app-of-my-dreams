const products = [
  {
    id: "kirby_adventure_vv",
    type: "design",
    artist: "Jupebox",
    medium: "print",
    title: "Vegetable Valley",
    imageUrl: "",
    productOptions: {
      size: ["Small"],
      finish: ["Matte"]
    },
    skuIds: [1]
  }
];

const skus = [
  {
    id: 1,
    parentId: "kirby_adventure_vv",
    type: "sku",
    options: {
      size: "Small",
      finish: "Matte"
    },
    inventory: 10
  }
];

const sets = [
  {
    id: "kirby_postcards",
    title: "Kirby's Adventure Postcard Set",
    type: "set",
    artist: "Jupebox",
    skuIds: [1, 2, 3, 4, 5, 6, 7, 8],
    price: 30,
    discount: 10
  }
];

const discountRules = [
  {
    id: 1,
    title: "3 Mini Prints for $5",
    medium: "print",
    quantity: 3,
    size: "Mini",
    discount: 1
  }
];
