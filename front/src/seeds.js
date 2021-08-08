const products = [
  {
    id: 1,
    name: "True Made Whey Protein Ena 1kg Concentrada Isolada Truemade",
    description:
      "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
    images: [
      "https://www.intactnutrition.in/wp-content/uploads/2020/07/prd_590553-One-Science-100-Premium-Whey-Protein-5-lb-Vanilla-Very-Berry_o.jpg",
    ],
    price: 2250.0,
    stock: 3,
    categories: [
      {
        name: "protein",
        image:
          "https://www.intactnutrition.in/wp-content/uploads/2020/07/prd_590553-One-Science-100-Premium-Whey-Protein-5-lb-Vanilla-Very-Berry_o.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Ena Protein Bar Caja X 16u 46g - Barras De Proteina Sabores ",
    description: "ENA PROTEIN BAR",
    images: [
      "http://www.themusclestore.com.ar/wp-content/uploads/2017/06/protein_bar_banana_split_16unidades_con_barras.jpg",
    ],
    price: 1315.0,
    stock: 4,
    categories: [
      {
        name: "alimentos",
        image:
          "http://www.themusclestore.com.ar/wp-content/uploads/2017/06/protein_bar_banana_split_16unidades_con_barras.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Zapatillas Max Air 3000",
    description: "Zapatillas voladoras",
    images: [
      "https://www.tiendalibero.com.ar/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/_/a_95_13.jpg",
    ],
    price: 1011.0,
    stock: 5,
    categories: [
      {
        name: "zapatillas",
        image:
          "https://www.tiendalibero.com.ar/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/_/a_95_13.jpg",
      },
    ],
  },
];

const orders = [
  //Primera order (Etapa 1)
  {
    orderState: "COMPLETED",
    userId: "Z3pPS8iC3WcYthfpqZD7IREadNl1",
    products: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 1 },
    ],
  },
  {
    orderState: "CART",
    userId: "Z3pPS8iC3WcYthfpqZD7IREadNl1",
    products: [{ productId: 3, quantity: 1 }],
  },
  {
    orderState: "COMPLETED",
    userId: "Z3pPS8iC3WcYthfpqZD7IREadNl1",
    products: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 1 },
    ],
  },
];

module.exports = {
  products,
  orders,
};
