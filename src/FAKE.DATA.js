import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpeg";

export const data = [
  {
    id: 1,
    name: "Atomic Habits",
    author: "James Clear",
    price: { current: 540, actual: 799 },
    discount: 32,
    img: img1,
    outOfStock: false,
    oldNew: false,
    inWishlist: true,
  },
  {
    id: 2,
    name: "Alchemist",
    author: "Paulo Coelho",
    price: { current: 229, actual: 349 },
    discount: 34,
    img: img2,
    outOfStock: true,
    oldNew: true,
    inWishlist: false,
  },
];
