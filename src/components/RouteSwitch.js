import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Home from "./Home";
import Store from "./Store";
import Contact from "./Contact";
import Nav from "./Nav";
import Cart from "./Cart";
import Product from "./Product";
import { useState } from "react";

const products = [
  new Product(uuidv4(), "Matt Black Cap, Unbranded, Unisex", 19.5, "cap"),
  new Product(uuidv4(), "Nike Orange-White Jacket", 155, "jacket"),
  new Product(uuidv4(), "Plain White T-Shirt for Men", 60, "tshirt"),
  new Product(
    uuidv4(),
    "Red Butterfly Dress + Black Belt for Women",
    245,
    "dress"
  ),
  new Product(uuidv4(), "Rayban 2020 Limited Edition Shades", 250, "glasses"),
  new Product(
    uuidv4(),
    "Stylish Denim Jeans for Women, Tight Fit",
    30,
    "jeans"
  ),
  new Product(uuidv4(), "Pink Polo Shirt, Slim Waist for Women", 20, "polo"),
  new Product(uuidv4(), "Plain Black Shirt, Fitted, Men", 40, "shirt"),
  new Product(uuidv4(), "Stylish High Heels, Full Black", 250, "shoes"),
  new Product(uuidv4(), "Class Release, Two Piece Black Suit", 400, "suit"),
];

const RouteSwitch = () => {
  const [displayCart, setDisplayCart] = useState(false);

  const showCart = () => setDisplayCart(true);
  const hideCart = () => setDisplayCart(false);

  return (
    <BrowserRouter>
      <Nav showCart={showCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Store products={products} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {displayCart ? (
        <Cart hideCart={hideCart} totalPrice={0} cartProducts={products} />
      ) : null}
    </BrowserRouter>
  );
};

export default RouteSwitch;
