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
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
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
    description:
      "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago, who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.",
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
    description:
      "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do.",
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
    description:
      "The people of Japan believe that everyone has an ikigai - a reason to jump out of bed each morning. And according to the residents of the Japanese island of Okinawa - the world's longest-living people - finding it is the key to a longer and more fulfilled life. It will show you how to leave urgency behind, find your purpose, nurture friendships and throw yourself into your passions.",
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
    description:
      "A Thousand Splendid Suns is a breathtaking story set against the volatile events of Afghanistan's last thirty years - from the Soviet invasion to the reign of the Taliban to post-Taliban rebuilding - that puts the violence, fear, hope, and faith of this country in intimate, human terms. ",
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
    description:
      "In this lyrical, exuberant follow-up to her 2007 novel, The Bastard of Istanbul, acclaimed Turkish author Elif Shafak unfolds two tantalizing parallel narratives—one contemporary and the other set in the thirteenth century, when Rumi encountered his spiritual mentor, the whirling dervish known as Shams of Tabriz—that together incarnate the poet's timeless message of love.",
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
    description:
      '"A concise and balanced mix of principles and pragmatics. I loved the tutorial-style game-like program development. This book rekindled my earliest joys of programming. Plus, JavaScript!" —Brendan Eich, creator of JavaScript. Eloquent JavaScript goes beyond the cut-and-paste scripts of the recipe books and teaches you to write code that\'s elegant and effective. ',
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
    description:
      "At any given moment, somewhere in the world someone struggles with the same software design problems you have. You know you don't want to reinvent the wheel (or worse, a flat tire), so you look to Design Patterns--the lessons learned by those who've faced the same problems.",
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
    description:
      "Nobel laureate Rabindranath Tagore was one of the most important writers in 20th-century Indian literature. Among his expansive and impressive body of work, Gitanjali is regarded as one of his greatest achievements, and has been a perennial bestseller since it was first published in 1910.",
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
    description:
      "This collection of mystical poetry focuses on one of life's core issues: coming to grips with the inner life. During the course of life, each of us is engaged on an inner journey. Rumi's Little Book of Life is a guidebook for that journey. The poetry is a companion for those who consciously enter the inner world to explore the gardens within--out of the everyday \"world of dust\"",
  },
];
