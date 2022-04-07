#### Status : 🏗️Under construction 🚧

<div align="center">

# Cobra Store

### CobraStore is an e-commerce platform for book lovers. You can buy various books in your favourite category.

![CobraStore gif](./cobrastore.gif)

# [Live Website](https://cobra-store-react.netlify.app)

</div>

---

## 📕 Table of Contents

- [Features](#🚀-features)
- [Features you might see in the future](#✨-features-you-might-see-in-the-future)
- [Instructions to run the app locally](#🔌-instructions-to-run-the-app-locally)
- [Readme](#⚠️-caution)

---

## 🚀 Features

From **Navbar**

- Navigate to the Wishlist,Cart,Login and User profile page.
- Clicking on CobraStore navigates back to homepage

From **Home** page

- Clicking on **Buy Now** takes the user to the products page
- Clicking on categories will take the user to the product page and show only products from that category.

From **Products** page

- filter the products based on your preference:

  - sort by Price
  - filter by Category
  - slider to filter by Price Range
  - sort by Ratings

- add/remove items to your Wishlist
- add items to your Cart by clicking on **Add to Cart**. Clicking on **Buy Now** adds the product to cart and takes the user to cart

- on clicking the product name, it will take the user to the product detail page which contains the description of that product.

From **WishList** page

- remove Items from your WishList
- add items to your Cart

From **Cart** page

- see the price card, containing total amount that you have to pay.
- increase/decrease the quantity of an item
- add/remove items to your WishList
- remove items from your Cart
- clicking on **Place Order** mimics the actual functionality of placing an order.

---

## ✨ Features you might see in the future

- Search for product functionality in **Navbar**
- Address Management

---

## 🔌 Instructions to run the app locally

- clone the repository on your local machine with the command below in your terminal, and cd into the folder

```
git clone https://github.com/sudipkundu999/CobraStore-React.git

cd CobraStore-React
```

- install dependencies

```
npm install
```

- create a `.env` file in root directory and create a variable like mentioned below

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_OF_YOUR_CHOICE>
```

- start the server

```
npm start
```

---

## ⚠️ Caution

CobraStore currently runs on a mock backend, [MockBee](https://mockbee.netlify.app/). So, everytime the page reloads a new instance of the server starts. What this means is, data won't persist on reloading the page. However, all other functionality works flawlessly like a real backend.

You can test this, by logging in or signing up then adding a few items to your cart and wishlist then logging out and again repeating the process using different credentials. Now, when you'll login using the 1st credentials you'll notice that the cart and wishlist shows the data as expected. Repeat the same for 2nd credentials and you'll see it is true for this case also. However, remember to not reload at any point during the process as that will start a new instance of the server.

---

Learning and growing with [@neogcamp](https://github.com/neogcamp)
