const Cart = ({ totalPrice, cartProducts }) => {
  return (
    <div className="overlay">
      <div className="cart">
        <div className="cart-heading">Your shopping cart</div>
        <div className="cart-products">
          {cartProducts.map((product, key) => {
            <div key={key} className="cart-product">
              <img
                className="product-image-c"
                src={`./images/clothing/${product.img}.png`}
                alt=""
              />
              <div className="product-name">{product.name}</div>
              <div className="product-price">
                ${product.totalPrice.toFixed(2)}
              </div>
              <input type="number" step="1" />
            </div>;
          })}
        </div>
        <div className="cart-total">Total price: ${totalPrice.toFixed(2)}</div>
        <button className="checkout-btn">Checkout</button>
        <button className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default Cart;
