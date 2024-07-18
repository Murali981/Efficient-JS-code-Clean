// IMPORTING MODULE
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from "./shoppingCart.js";

console.log("Importing module");

addToCart("slippers", 2);

console.log(price, totalQuantity);

// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");

// console.log(res);

// const data = await res.json();

// console.log(data);

// console.log("Something");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();

  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

console.log(lastPost);

// Not very clean
// lastPost.then(data => console.log(data));

const lastPost2 = await getLastPost();

console.log(lastPost2);

// Below is an IIFE (Immediately Invoked Function Expression)
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from the supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
    orderStock,
  };
})();

shoppingCart2.addToCart("apple", 4);
shoppingCart2.addToCart("pizzas", 2);

shoppingCart2.orderStock("apples", 3);

console.log(shoppingCart2);
