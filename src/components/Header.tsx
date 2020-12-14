import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

type IProps = {
    cartItems: any;
}

const Header: React.FC<IProps> = ({ cartItems }) => {
    // MyCart: React.FC<IProps> = ({ cartItems })
    // const [{ basket }] = useState();
    return <div className="header">
        <Link to="/">
            <img className="header_logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFMHIVvGe-o81dtcHYZdtzVg32q9m_hPsCQ&usqp=CAU"
                alt="" />
        </Link>
        <div className="header_properties">
            <h3>e-PaustakStore | { }</h3>
        </div>
        <div className="header_Nav">
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/" >  Home |</Link>

            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/myorders">  My Orders|</Link>

<Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/mycart">  Cart {cartItems.length && cartItems.length!==0 ? ": " + cartItems.length: null}</Link>
        </div>
    </div>
}

const mapStateToProps = (state: any) => ({
    cartItems: state.home.cartItems,
});

export default connect(mapStateToProps)(Header);;