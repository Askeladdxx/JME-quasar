import { ref } from "vue";

export default {
  setup() {
    const slide = ref("first");

    const navbuttons = [
      { label: "Home", route: "/" },
      { label: "Mission & Vision", route: "/mission-vision" },
      { label: "Products", route: "/products" },
      { label: "Contact Us", route: "/contact-us" },
    ];

    return {
      slide,
      navbuttons,
    };
  },
};
