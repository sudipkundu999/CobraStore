import { v4 as uuid } from "uuid";

/**
 * Generate the image URL
 * @param {number} imageNumber Takes an image number
 * @returns Url of that image
 */
const getImg = (imageNumber) =>
  process.env.PUBLIC_URL + `/images/img${imageNumber}.jpg`;

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    id: 1,
    name: "Atomic Habits",
    author: "James Clear",
    category: "Life Changing",
    price: { current: 540, actual: 799 },
    image: getImg(1),
    inStock: true,
    badge: "",
    rating: 4.5,
  },
  {
    _id: uuid(),
    id: 2,
    name: "Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    price: { current: 229, actual: 349 },
    image: getImg(2),
    inStock: true,
    badge: "Bestseller",
    rating: 4.7,
  },
  {
    _id: uuid(),
    id: 3,
    name: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Life Changing",
    price: { current: 299, actual: 399 },
    image: getImg(3),
    inStock: true,
    badge: "Trending",
    rating: 4.3,
  },
  {
    _id: uuid(),
    id: 4,
    name: "Ikigai",
    author: "Héctor García",
    category: "Life Changing",
    price: { current: 449, actual: 599 },
    image: getImg(4),
    inStock: true,
    badge: "",
    rating: 4.2,
  },
  {
    _id: uuid(),
    id: 5,
    name: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    category: "Fiction",
    price: { current: 399, actual: 599 },
    image: getImg(5),
    inStock: true,
    badge: "Bestseller",
    rating: 4.4,
  },
  {
    _id: uuid(),
    id: 6,
    name: "The Forty Rules of Love",
    author: "Elif Shafak",
    category: "Fiction",
    price: { current: 349, actual: 499 },
    image: getImg(6),
    inStock: true,
    badge: "",
    rating: 4.1,
  },
  {
    _id: uuid(),
    id: 7,
    name: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    category: "Educational",
    price: { current: 499, actual: 799 },
    image: getImg(7),
    inStock: true,
    badge: "",
    rating: 4.8,
  },
  {
    _id: uuid(),
    id: 8,
    name: "Head First JavaScript",
    author: "Elisabeth Robson",
    category: "Educational",
    price: { current: 599, actual: 999 },
    image: getImg(8),
    inStock: false,
    badge: "",
    rating: 4.0,
  },
  {
    _id: uuid(),
    id: 9,
    name: "Gitanjali",
    author: "Rabindranath Tagore",
    category: "Poetry",
    price: { current: 179, actual: 299 },
    image: getImg(9),
    inStock: true,
    badge: "",
    rating: 4.6,
  },
  {
    _id: uuid(),
    id: 10,
    name: "Little Book of Life",
    author: "Rumi",
    category: "Poetry",
    price: { current: 129, actual: 149 },
    image: getImg(10),
    inStock: true,
    badge: "",
    rating: 4.9,
  },
];
