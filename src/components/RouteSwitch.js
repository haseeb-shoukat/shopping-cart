import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Home from "./Home";
import Store from "./Store";
import Contact from "./Contact";
import Nav from "./Nav";
import Cart from "./Cart";
import { useState } from "react";

const products = [
  {
    name: "Matt Black Cap, Unbranded, Unisex",
    price: 19.5,
    img: "cap",
    key: uuidv4(),
  },
  {
    name: "Nike Orange-White Jacket",
    price: 155,
    img: "jacket",
    key: uuidv4(),
  },
  {
    name: "Plain White T-Shirt for Men",
    price: 60,
    img: "tshirt",
    key: uuidv4(),
  },
  {
    name: "Red Butterfly Dress + Black Belt for Women",
    price: 245,
    img: "dress",
    key: uuidv4(),
  },
  {
    name: "Rayban 2020 Limited Edition Shades",
    price: 250,
    img: "glasses",
    key: uuidv4(),
  },
  {
    name: "Stylish Denim Jeans for Women, Tight Fit",
    price: 30,
    img: "jeans",
    key: uuidv4(),
  },
  {
    name: "Pink Polo Shirt, Slim Waist for Women",
    price: 20,
    img: "polo",
    key: uuidv4(),
  },
  {
    name: "Plain Black Shirt, Fitted, Men",
    price: 40,
    img: "shirt",
    key: uuidv4(),
  },
  {
    name: "Stylish High Heels, Full Black",
    price: 250,
    img: "shoes",
    key: uuidv4(),
  },
  {
    name: "Class Release, Two Piece Black Suit",
    price: 400,
    img: "suit",
    key: uuidv4(),
  },
];

const RouteSwitch = () => {
  const [displayCart, setDisplayCart] = useState(false);

  const showCart = () => setDisplayCart(true);
  const hideCart = () => setDisplayCart(false);

  const cartProducts = [
    {
      name: "Matt Black Cap, Unbranded, Unisex",
      price: 19.5,
      img: "cap",
      quantity: 8,
      totalPrice: 56.098,
    },
    {
      name: "Red Butterfly Dress + Black Belt for Women",
      price: 245,
      img: "dress",
      quantity: 4,
      totalPrice: 800,
    },
    {
      name: "Plain White T-Shirt for Men",
      price: 60,
      img: "tshirt",
      quantity: 4,
      totalPrice: 700,
    },
  ];

  return (
    <BrowserRouter>
      <Nav showCart={showCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Store products={products} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {displayCart ? (
        <Cart hideCart={hideCart} totalPrice={0} cartProducts={cartProducts} />
      ) : null}
    </BrowserRouter>
  );
};

export default RouteSwitch;
