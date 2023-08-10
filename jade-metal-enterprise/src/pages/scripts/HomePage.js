import { ref } from "vue";

export default {
  setup() {
    const navbuttons = [
      { label: "Home", route: "/" },
      { label: "Mission & Vision", route: "/mission-vision" },
      { label: "Products", route: "/products" },
      { label: "Contact Us", route: "/contact-us" },
    ];

    return {
      navbuttons,
    };
  },
  data() {
    return {
      productCards: [
        {
          id: 1,
          image:
            "https://atlas-content-cdn.pixelsquid.com/stock-images/pipe-clamp-8dZ0yzE-600.jpg",
          name: "Pole Clamp",
        },
        {
          id: 2,
          image:
            "https://www.mymillennium.us/wp-content/uploads/2022/12/600-300115-1.jpg",
          name: "U Guard",
        },
        {
          id: 3,
          image:
            "https://bsg-i.nbxc.com/product/ea/0b/43/2a76cfbfd6de2287a6dcc484d4.jpg@95Q.webp",
          name: "Grounding Rod",
        },
      ],
    };
  },
};
