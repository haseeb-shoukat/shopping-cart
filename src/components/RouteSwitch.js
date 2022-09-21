import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Contact from "./Contact";
import Nav from "./Nav";
import Cart from "./Cart";
import Items from "./Items";
import { useState } from "react";

const RouteSwitch = () => {
  const [displayCart, setDisplayCart] = useState(false);
  const [products, setProducts] = useState(Items);
  const [totalPrice, setTotal] = useState(0);

  const showCart = () => setDisplayCart(true);
  const hideCart = () => setDisplayCart(false);
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
    updateTotal();
  };
  const updateTotal = () => {
    let total = 0;
    products.map((product) => (total += product.totalPrice));
    setTotal(total);
  };

  return (
    <BrowserRouter>
      <Nav showCart={showCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Store products={[...products]} updateProducts={updateProducts} />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {displayCart ? (
        <Cart
          hideCart={hideCart}
          totalPrice={totalPrice}
          cartProducts={[...products]}
          updateProducts={updateProducts}
        />
      ) : null}
    </BrowserRouter>
  );
};

export default RouteSwitch;
