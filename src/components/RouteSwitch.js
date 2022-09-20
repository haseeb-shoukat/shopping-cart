import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Contact from "./Contact";
import Nav from "./Nav";
import Cart from "./Cart";
import { useState } from "react";

const products = [
  { name: "Matt Black Cap, Unbranded, Unisex", price: 19.5, img: "cap" },
  { name: "Nike Orange-White Jacket", price: 155, img: "jacket" },
  { name: "Plain White T-Shirt for Men", price: 60, img: "tshirt" },
  {
    name: "Red Butterfly Dress + Black Belt for Women",
    price: 245,
    img: "dress",
  },
  {
    name: "Rayban 2020 Limited Edition Shades",
    price: 250,
    img: "glasses",
  },
  {
    name: "Stylish Denim Jeans for Women, Tight Fit",
    price: 30,
    img: "jeans",
  },
  { name: "Pink Polo Shirt, Slim Waist for Women", price: 20, img: "polo" },
  { name: "Plain Black Shirt, Fitted, Men", price: 40, img: "shirt" },
  { name: "Stylish High Heels, Full Black", price: 250, img: "shoes" },
  { name: "Class Release, Two Piece Black Suit", price: 400, img: "suit" },
];

const RouteSwitch = () => {
  const [displayCart, setDisplayCart] = useState(false);

  const showCart = () => setDisplayCart(true);

  return (
    <BrowserRouter>
      <Nav showCart={showCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Store products={products} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {displayCart ? <Cart totalPrice={0} cartProducts={[]} /> : null}
    </BrowserRouter>
  );
};

export default RouteSwitch;
