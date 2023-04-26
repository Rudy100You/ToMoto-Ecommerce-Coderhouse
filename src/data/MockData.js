const MockData = {
  items: [
    {
      id: 1,
      name: "Benelli TRK 502",
      price: 7200.0,
      photoSrc: "/img/benelli_trk_502.jpg",
      categoryId: 3,
      stock: 5,
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
    },
    {
      id: 2,
      name: "Honda Tornado XR 250",
      price: 6100.0,
      photoSrc: "/img/honda_tornado_xr_250.jpg",
      categoryId: 0,
      stock: 3,
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."

    },
    {
      id: 3,
      name: "Yamaha Tenere 250",
      price: 5300.0,
      photoSrc: "/img/yamaha_tenere_250.jpg",
      categoryId: 3,
      stock: 1,
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
    },
    {
      id: 4,
      name: "LISM 3000W High Speed Mid Motor",
      price: 5431.58,
      photoSrc: "/img/LISM_3000W_High_Speed_Mid_Motor.jpg",
      categoryId: 2,
      stock: 0,
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
    },
  ],
  categories: [
    { id: 0, name: "Motocross" },
    { id: 1, name: "Cuatriciclos" },
    { id: 2, name: "Electricos" },
    { id: 3, name: "Alta Gama" },
  ],
};

export default MockData;
export const categories = MockData.categories;
export const items = MockData.items;