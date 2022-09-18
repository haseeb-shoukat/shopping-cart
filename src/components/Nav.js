const Nav = () => {
  return (
    <div className="nav-bar">
      <a className="nav-heading" href="#">
        Knock-Offs
      </a>
      <nav>
        <a className="nav-item active" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          Products
        </a>
        <a className="nav-item" href="#">
          Contact
        </a>
        <a className="nav-item" href="#">
          <div className="circle-shape">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
        </a>
      </nav>
    </div>
  );
};

export default Nav;
