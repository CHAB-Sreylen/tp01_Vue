import { defineStore } from "pinia";
export const useProductStore = defineStore("product_store", {
  state: () => ({
    Categories: [
      {
        Img: "./src/assets/image/burger-04.png",
        bg: "rgba(242, 252, 228, 1)",
        ItemName: "Cake & Milk",
        Amount: "14 items",
      },
      {
        Img: "./src/assets/image/peach.png",
        bg: "rgba(255, 252, 235, 1)",
        ItemName: "Peach",
        Amount: "17 items",
      },
      {
        Img: "./src/assets/image/kivi.png",
        bg: "#ECFFEC",
        ItemName: "Organic Kiwi",
        Amount: "21 items",
      },
      {
        Img: "./src/assets/image/apple.png",
        bg: "#FEEFEA",
        ItemName: "Red Apple",
        Amount: "68 items",
      },
      {
        Img: "./src/assets/image/snack.png",
        bg: "rgba(255, 243, 235, 1)",
        ItemName: "Snack",
        Amount: "34 items",
      },
      {
        Img: "./src/assets/image/grape.png",
        bg: "#FFF3FF",
        ItemName: "Black plum",
        Amount: "25 items",
      },
      {
        Img: "./src/assets/image/cabbage.png",
        bg: "#F2FCE4",
        ItemName: "Vegetables",
        Amount: "65 items",
      },
      {
        Img: "./src/assets/image/headphone.png",
        bg: "#FFFCEB",
        ItemName: "Headphone",
        Amount: "33 items",
      },
      {
        Img: "./src/assets/image/milk.png",
        bg: "#F2FCE4",
        ItemName: "Cake & Milk",
        Amount: "54 items",
      },
      {
        Img: "./src/assets/image/orange.png",
        bg: "#FFF3FF",
        ItemName: "Orange",
        Amount: "63 items",
      },
    ],
    Banner: [
      {
        img: "./src/assets/image/onion.png",
        bannerBg: "rgba(240, 232, 213, 1)",
        Title: "Everyday Fresh & Clean with Our Products",
        btnBg: "#3BB77E",
      },
      {
        img: "./src/assets/image/Frame1.png",
        bannerBg: "#FFFFFF",
        Title: "Make your Breakfast Healthy and Easy",
        btnBg: "#3BB77E",
      },
      {
        img: "./src/assets/image/vegetable.png",
        bannerBg: "#E7EAF3",
        Title: "The best Organic Products Online",
        btnBg: "rgba(253, 192, 64, 1)",
      },
    ],
    //groups:["Miks & Diaries","Coffee & Teas","Pet Foods","Meats","Vegetables","Fruits"
    Menu: [
      {
        header: "Featured and Categories",
      },
      {
        header: "Popular products",
      },
    ],
    Group: [
      "Milks & Diaries",
      "Coffees & Teas",
      "Pet Foods",
      "Meats",
      "Vegetable",
    ],
    AllProduct: [
      {
        p_img: "./src/assets/image/corn.png",
        pbg: "#FD6E6E",
        ptype: "Hot",
        pdetail: "All Natural Italian-Style Chicken Meatballs",
      },
      {
        p_img: "./src/assets/image/orange.png",
        pbg: "#FDC040",
        ptype: "Sale",
        pdetail: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
      },
      {
        p_img: "./src/assets/image/chili.png",
        pbg: "",
        ptype: "",
        pdetail: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      },
      {
        p_img: "./src/assets/image/lemon.png",
        pbg: "",
        ptype: "Hot",
        pdetail: "Blue Diamond Almonds Lightly Salted Vegetables",
      },
      {
        p_img: "./src/assets/image/Meat1.png",
        pbg: "",
        ptype: "",
        pdetail: "Chobani Complete Vanilla Greek Yogurt",
      },
      {
        p_img: "./src/assets/image/Meat2.png",
        pbg: "#FDC040",
        ptype: "Sale",
        pdetail: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
      },
      {
        p_img: "./src/assets/image/Meat3.png",
        pbg: "",
        ptype: "",
        pdetail: "Encore Seafoods Stuffed Alaskan Salmon",
      },
      {
        p_img: "./src/assets/image/Meat4.png",
        pbg: "",
        ptype: "",
        pdetail: "Gorton's Beer Battered Fish Fillets with soft paper",
      },
      {
        p_img: "./src/assets/image/Meat5.png",
        pbg: "#FD6E6E",
        ptype: "Hot",
        pdetail: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
      },
    ],
    Nav_item:[
      {
        
        IconFront:"uil-fire",
        name:"Hot Deals",
        IconBack:"uil-angle-down",
      },
      {
        IconFront:"",
        name:"Home",
        IconBack:"",
      },
      {
        IconFront:"",
        name:"Food",
        IconBack:"uil-angle-down",
      },
      {
        IconFront:"",
        name:"Vegetables",
        IconBack:"uil-angle-down",
      },
      {
        IconFront:"",
        name:"Drink",
        IconBack:"",
      },
      {
        IconFront:"",
        name:"Cookies",
        IconBack:"",
      },
      {
        IconFront:"",
        name:"Meat & Seafood",
        IconBack:"uil-angle-down",
      },
      {
        IconFront:"",
        name:"Bakery",
        IconBack:"",
      },
    ]
  }),
  getters: {
    doubleCount: (state) => state.count,
  },
});
