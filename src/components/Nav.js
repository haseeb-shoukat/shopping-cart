const Nav = ({ showCart, totalQuantity }) => {
  return (
    <div className="nav-bar">
      <a className="nav-heading" href="/">
        Knock-Offs
      </a>
      <nav>
        <a id="home" className="nav-item active" href="/">
          Home
        </a>
        <a id="products" className="nav-item" href="/products">
          Products
        </a>
        <a id="contact" className="nav-item" href="/contact">
          Contact
        </a>
        <div className="circle-shape nav-item" onClick={showCart} role="button">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          {totalQuantity > 0 ? (
            <div className="bubble">{totalQuantity}</div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
