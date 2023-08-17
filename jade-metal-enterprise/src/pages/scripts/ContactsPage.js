import { ref } from "vue";

export default {
  setup() {
    const navbuttons = [
      { label: "Home", route: "/" },
      { label: "Products", route: "/products" },
      { label: "Partners", route: "/partners" },
      { label: "Contact Us", route: "/contact-us" },
    ];

    return {
      navbuttons,
    };
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Email submitted:", this.email);
    },
  },
};
