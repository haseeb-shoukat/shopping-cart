import { useEffect } from "react";

const Store = ({ products }) => {
  useEffect(() => {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#products").classList.add("active");
  }, []);

  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div key={product.key} className="product-card">
            <img
              className="card-img"
              src={`./images/clothing/${product.img}.png`}
              alt=""
            />
            <div className="card-body">
              <div className="card-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">${product.price.toFixed(2)}</div>
              </div>
              <button className="cart-btn">Add To Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
