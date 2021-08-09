const products = [
  {
    name: "True Made Whey Protein",
    description:
      "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp",
    ],
    price: 2250.21,
    stock: 103,
    categories: [
      {
        name: "suplemento",
        image:
          "https://http2.mlstatic.com/D_NQ_NP_756133-MLA41827275963_052020-O.webp",
      },
    ],
  },
  {
    name: "Ena Protein Bar Caja X 16u 46g",
    description: "ENA PROTEIN BAR",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_707077-MLA40743470620_022020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_779555-MLA40743624545_022020-O.webp",
    ],
    price: 1315.19,
    stock: 109,
    categories: [
      {
        name: "suplemento",
        image:
          "https://blog.runnics.com/wp-content/uploads/2019/10/zapatillas-correr-tipos-1024x529-1.jpg",
      },
    ],
  },
  {
    name: "Fish Oil 1200mg Nature's Bounty",
    description:
      "Un suplemento dietario que contiene ácidos grasos omega-3, incluidos EPA y DHA. Aceite De Pescado Omega 3",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_904826-MLA44008957239_112020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_779555-MLA40743624545_022020-O.https://http2.mlstatic.com/D_NQ_NP_687475-MLA41534188094_042020-O.webp",
    ],
    price: 1011.19,
    stock: 105,
    categories: [
      {
        name: "suplemento",
        image:
          "https://blog.runnics.com/wp-content/uploads/2019/10/zapatillas-correr-tipos-1024x529-1.jpg",
      },
    ],
  },
  {
    name: "Shaker Vaso Mezclador Para Proteinas",
    description: "Mezclador Proteina",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_749209-MLA32861738659_112019-O.webp",
    ],
    price: 349.29,
    stock: 157,
    categories: [
      {
        name: "shaker",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Mancuerna Acero Pintado Ajustable 20kg",
    description:
      "Equipamiento profesional que se adapta perfectamente a tus necesidades de ejercicio y entrenamiento sin ir al gimnasio.",
    images: [
      "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1000x1000-FITNES34.jpg&w=500&q=100",
    ],
    price: 10805.12,
    stock: 178,
    categories: [
      {
        name: "articulos de gimnasio",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Proteina Isolatada WHEY",
    description: "Proteina GOLD STANDAR 1 kg",
    images: ["https://iluvstore.com/img/p/1/0/6/4/6/10646-home_default.jpg"],
    price: 10805.12,
    stock: 178,
    categories: [
      {
        name: "suplemento",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Proteina Best Wey",
    description: "2 proteinas Xtrenght Best Wey Protein 2 kg",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_658201-MLA32038658595_092019-O.jpg",
    ],
    price: 15000.1,
    stock: 100,
    categories: [
      {
        name: "suplemento",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Platinum Whey Protein",
    description: "Premium Wey Prtein 3kg - START NUTRATION",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/306/768/products/premium-whey-protein-3kg1-658fafe48ca8ae50ac16170452694698-480-0.png",
    ],
    price: 15000.1,
    stock: 100,
    categories: [
      {
        name: "suplemento",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Shaker GOT",
    description: "Shaker Protein 100 ml, vaso smart",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/133/104/products/tienda-nube-muscetta-31-281-883f2c42693b578c0015905360360177-1024-1024.jpg",
    ],
    price: 1000,
    stock: 0,
    categories: [
      {
        name: "shaker",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Shaker GOLD",
    description: "Shaker Premium 1 litro",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_844426-MLA42194466610_062020-V.jpg",
    ],
    price: 1500,
    stock: 100,
    categories: [
      {
        name: "shaker",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Shaker protein Gentech",
    description: "Shaker Blender color rosa 500cc",
    images: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/885/784/products/shaker_rosa_gentech1-76023962f5711f7e7d15901109627044-480-0.jpg",
    ],
    price: 1500,
    stock: 100,
    categories: [
      {
        name: "shaker",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Rueda Abdomen",
    description: "Rueda para hacer abdominales en casa",
    images: [
      "https://www.dhresource.com/0x0/f2/albu/g7/M01/13/95/rBVaSVsp3DqAGVxvAAGKCL3T2Wc837.jpg/factory-direct-two-wheel-abdominal-abdomen.jpg",
    ],
    price: 3500,
    stock: 100,
    categories: [
      {
        name: "articulos de gimnasio",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Kit Entrenamiento intenso",
    description: "Incluye elastico y pesas para entrenamiento de piernas",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_908604-MLA46212230882_052021-V.jpg",
    ],
    price: 5600,
    stock: 100,
    categories: [
      {
        name: "articulos de gimnasio",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },

  {
    name: "Soga Fitness",
    description: "Soga para entrenamiento intensivo",
    images: [
      "https://www.digitalsport.com.ar/files/products/5b97ecf06121f-290656-500x500.jpg",
    ],
    price: 1200,
    stock: 100,
    categories: [
      {
        name: "articulos de gimnasio",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Mancuernas",
    description: "mancuerna 4 kg",
    images: [
      "https://www.mideporte.pe/wp-content/uploads/2020/03/MANCUERNAS-NEOPRENE-ROJO-4KG.png",
    ],
    price: 1200,
    stock: 100,
    categories: [
      {
        name: "articulos de gimnasio",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Colchoneta Fitness",
    description:
      "colchoneta para entrenar en casa y lograr el cuerpo que queres",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_893137-MLA31044866528_062019-O.jpg",
    ],
    price: 400,
    stock: 0,
    categories: [
      {
        name: "articulos de gimnasio",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Bici Estatica",
    description: "Bici para hacer cardio en casa con 5 velocidades",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_639917-MCO45227001403_032021-O.jpg",
    ],
    price: 20500,
    stock: 10,
    categories: [
      {
        name: "articulos de gimnasio",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Shaker electrico",
    description:
      "Shaker electrico 450 ml , para batir tus suplementos favorito",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/51Is49UedKL.jpg",
    ],
    price: 999,
    stock: 50,
    categories: [
      {
        name: "shaker",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
  {
    name: "Shaker vaso batidor electrico",
    description: "Shaker vaso batidor 1 litro",
    images: [
      "https://bazarchef.com.ar/wp-content/uploads/2021/07/bz-jc01-E.jpg",
    ],
    price: 1500,
    stock: 10,
    categories: [
      {
        name: "shaker",
        image:
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ],
  },
];

const users = [
  {
    id: "d1687b07-058c-414a-bb5a-77a8d897be57",
    firstName: "Knut",
    lastName: "Waale",
    email: "knutwaale@gmail.com",
    password: "123456",
    userType: "S",
  },
  {
    id: "e8dfefe1-fda2-4edd-b188-970a39d70685",
    firstName: "Marcos",
    lastName: "Carrizo",
    email: "mcarrizo@gmail.com",
    password: "1234",
    userType: "C",
  },
  {
    id: "04752f7e-e5e4-483d-bcdb-c1d500a9ed94",
    firstName: "Brian",
    lastName: "Santaran",
    email: "bsantaran@gmail.com",
    password: "1234",
    userType: "A",
  },
  {
    id: "14744522-4890-462e-8b7b-ed79fa2cf78d",
    firstName: "Daniel",
    lastName: "Maers",
    email: "dmaers@gmail.com",
    password: "1234",
  },
  {
    id: "2BDoabi6sPPsH58LQFR3Xy7k1gM2",
    firstName: "Francisco",
    lastName: "Garrido",
    email: "kodeforge@gmail.com",
    password: "1234",
  },
  {
    id: "VPQbE7zf5JezEZyrDl7EWfpzNOC2",
    firstName: "Fran",
    lastName: "Garrido",
    email: "fg0611@gmail.com",
    password: "1234",
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
    userId: "49750430-28da-4202-bb69-30dd23d918c4",
    products: [{ productId: 3, quantity: 1 }],
  },
  {
    orderState: "COMPLETED",
    userId: "49750430-28da-4202-bb69-30dd23d918c4",
    products: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 1 },
    ],
  },
];

const locations = [
  {
    description: "La Isla",
    lat: -34.58469156566315,
    lng: -58.39677700514054,
    images: [
      "https://www.laviezine.com/wp-content/uploads/2015/11/Wills-Gym.jpeg",
      "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2K6FEBTZEVGK5DPDCBYZW3YTAY.jpg",
      "https://www.noosaaquaticcentre.com.au/wp-content/uploads/2017/07/Noosa-Aquatic-Gym.jpg",
      "https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811522_sumario_normal.jpg",
    ],
  },
  {
    description: "Recoleta",
    lat: -34.587689246485276,
    lng: -58.39785443486049,
    images: [
      "https://www.laviezine.com/wp-content/uploads/2015/11/Wills-Gym.jpeg",
      "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2K6FEBTZEVGK5DPDCBYZW3YTAY.jpg",
      "https://www.noosaaquaticcentre.com.au/wp-content/uploads/2017/07/Noosa-Aquatic-Gym.jpg",
      "https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811522_sumario_normal.jpg",
    ],
  },
  {
    description: "Barrio Norte",
    lat: -34.58986618904399,
    lng: -58.3974905355163,
    images: [
      "https://www.laviezine.com/wp-content/uploads/2015/11/Wills-Gym.jpeg",
      "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2K6FEBTZEVGK5DPDCBYZW3YTAY.jpg",
      "https://www.noosaaquaticcentre.com.au/wp-content/uploads/2017/07/Noosa-Aquatic-Gym.jpg",
      "https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811522_sumario_normal.jpg",
    ],
  },
  {
    description: "Puerto Madero",
    lat: -34.617423999879875,
    lng: -58.36099524562233,
    images: [
      "https://www.laviezine.com/wp-content/uploads/2015/11/Wills-Gym.jpeg",
      "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2K6FEBTZEVGK5DPDCBYZW3YTAY.jpg",
      "https://www.noosaaquaticcentre.com.au/wp-content/uploads/2017/07/Noosa-Aquatic-Gym.jpg",
      "https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811522_sumario_normal.jpg",
    ],
  },
  {
    description: "San Telmo",
    lat: -34.62119585895379,
    lng: -58.3714838619852,
    images: [
      "https://www.laviezine.com/wp-content/uploads/2015/11/Wills-Gym.jpeg",
      "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2K6FEBTZEVGK5DPDCBYZW3YTAY.jpg",
      "https://www.noosaaquaticcentre.com.au/wp-content/uploads/2017/07/Noosa-Aquatic-Gym.jpg",
      "https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811522_sumario_normal.jpg",
    ],
  },
  {
    description: "San Miguel",
    lat: -34.615905189337646,
    lng: -58.37099866285961,
    images: [
      "https://www.laviezine.com/wp-content/uploads/2015/11/Wills-Gym.jpeg",
      "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2K6FEBTZEVGK5DPDCBYZW3YTAY.jpg",
      "https://www.noosaaquaticcentre.com.au/wp-content/uploads/2017/07/Noosa-Aquatic-Gym.jpg",
      "https://d500.epimg.net/cincodias/imagenes/2019/05/02/lifestyle/1556809482_591063_1556811522_sumario_normal.jpg",
    ],
  },
];

module.exports = {
  products,
  users,
  orders,
  locations,
};
