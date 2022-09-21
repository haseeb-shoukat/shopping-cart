const Cart = ({ hideCart, totalPrice, cartProducts }) => {
  return (
    <div className="overlay">
      <div className="cart">
        <div className="cart-heading">Your shopping cart</div>
        <div className="cart-products">
          {cartProducts.map((product) => {
            return (
              <div key={product.key} className="cart-product">
                <img
                  className="product-image-c"
                  src={`./images/clothing/${product.img}.png`}
                  alt=""
                />
                <div className="product-info-c">
                  <div className="product-name no-wrap">{product.name}</div>
                  <div className="product-price">
                    ${product.totalPrice.toFixed(2)}
                  </div>
                  <div className="control-knobs">
                    <button className="control-knob">
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <div>{product.quantity}</div>
                    <button className="control-knob">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-total">Total price: ${totalPrice.toFixed(2)}</div>
        <button className="checkout-btn">Checkout</button>
        <button className="close-btn" onClick={hideCart}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
