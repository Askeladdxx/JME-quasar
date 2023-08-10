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
};
