import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

//Common component that would be avaliable in all pages

interface IProps {
  cartItems: any;
}

const Header: React.FC<IProps> = ({ cartItems }) => {
  let history = useHistory();
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="mh-logo">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFMHIVvGe-o81dtcHYZdtzVg32q9m_hPsCQ&usqp=CAU"
              alt=""
            />
          </Link>

          <Link to="/">
            <h3 style={{ color: "white", fontSize: 30 }}>e-PaustakStore</h3>
          </Link>
        </h1>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/"
              >
                Home |
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/myorders"
              >
                My Orders |
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/mycart"
              >
                Cart{" "}
                {cartItems.length && cartItems.length !== 0
                  ? ": " + cartItems.length
                  : null}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state: any) => ({
  cartItems: state.home.cartItems,
});

export default connect(mapStateToProps)(Header);
