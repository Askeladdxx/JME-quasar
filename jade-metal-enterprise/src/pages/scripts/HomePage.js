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
            "https://image.made-in-china.com/202f0j00vQbczrWCHTky/High-Performance-5-8-Earth-Copper-Ground-Rod.webp",
          name: "Grounding Rod",
        },
        {
          id: 4,
          image:
            "https://www.anchormark.com.au/wp-content/uploads/050264_threaded-Rod-zink-1000px.jpg",
          name: "Anchor Rod",
        },
        {
          id: 5,
          image:
            "https://www.macleannetworksolutions.com/wp-content/uploads/Hardware-Aerial-Pole-Line-Lashing-Products-Lashing-Wire.jpg",
          name: "Lashing Wire",
        },
        {
          id: 6,
          image:
            "https://i0.wp.com/icc.com/wp-content/uploads/2017/08/2-inch-wall-mount-j-hook-25-pack-iccmsjhk44-1000-revb.jpg?resize=600%2C600&ssl=1",
          name: "J-Hook",
        },
        {
          id: 7,
          image:
            "https://hubbellcdn.com/prodimage1200/HPS_PPHID_251059_1200.jpg",
          name: "Suspension Straight",
        },
        {
          id: 8,
          image:
            "https://hubbellcdn.com/prodimage1200/HPS_PPHID_251057_1200.jpg",
          name: "Suspension Curve",
        },
        {
          id: 9,
          image:
            "https://preformed.com/media/com_eshop/products/resized/Cat.%20No.%20GDE-1104%20%20GDE-1107%20GUY-GRIP%20Dead-ends1-max-1200x1200.png",
          name: "Guy Grip (all sizes)",
        },
        {
          id: 10,
          image: "https://astmbolts.com/img/images/machine-bolts.jpg",
          name: 'Machine Bolt 5/8x4" - 5/8x8"',
        },
        {
          id: 11,
          image: "https://assets.unilogcorp.com/267/ITEM/IMG/MacLean_J7920.jpg",
          name: "Arms Extension",
        },
        {
          id: 12,
          image:
            "https://hubbellcdn.com/prodimage1200/HPS_ID_GC14101_PRODIMAGE_1200.jpg",
          name: "Grounding Clamp Top Set",
        },
        {
          id: 13,
          image:
            "https://hubbellcdn.com/prodimage1200/HPS_PPHID_251054_PRODIMAGE_1200.jpg",
          name: "Strand Clamp Bottom Set",
        },
        {
          id: 14,
          image:
            "https://5.imimg.com/data5/NI/SL/WO/SELLER-11187939/4-inch-electrical-insulator.jpg",
          name: "Insulators",
        },
        {
          id: 15,
          image:
            "https://www.powertelcom.com/wp-content/uploads/2019/11/Alley-Arm-1.jpg",
          name: "Alley Arm",
        },
        {
          id: 16,
          image:
            "https://www.daytaifiberoptic.com/Content/uploads/2022451740/20220902153016d20a67e55a94473a8edbd9a3fb6785d1.png",
          name: "Nap Box and Closure",
        },
        {
          id: 17,
          image:
            "https://5.imimg.com/data5/IT/FR/NP/SELLER-65040356/flexible-hdpe-pipe-roll.jpg",
          name: "HDPE Pipe (all sizes)",
        },
        {
          id: 18,
          image:
            "https://image.made-in-china.com/2f0j00AsCiOMLzkpbP/Telecom-PVC-Adhesive-Tape-for-Wrapping-Below-600V.webp",
          name: "Adhesive Tapes (any size)",
        },
        {
          id: 19,
          image:
            "https://www.telenco-networks.com/media/cache/slideshow_xs/uploads/documents/5dcacbebb81d7_0179.jpg",
          name: "Messenger Wire",
        },
        {
          id: 20,
          image: "https://m.media-amazon.com/images/I/613BAx-bHSL.jpg",
          name: "Manhole cover (any size)",
        },
      ],
    };
  },
};
