import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { buyNow, clearCart, myOrders } from '../redux/actions/books';


type IProps = {
    cartItems: any;
    buyNow: (i: any) => void;
    clearCart: () => void;
    myOrders: (i: any) => void
}

const MyCart: React.FC<IProps> = ({ cartItems, buyNow, clearCart, myOrders }) => {

    const [state, setstate] = useState({ disabled: false })

    const handleEdit = () => {
        setstate({ disabled: !state.disabled })
    }

    console.log("cartitems", cartItems)
    let itemPrice = 0;
    cartItems.map((i: any) => {
        itemPrice = itemPrice + i.price
    })
    let tax = itemPrice !== 0 ? itemPrice / 10 : 0;
    let shippingCharges = itemPrice !== 0 ? itemPrice / 20 : 0;
    let total = itemPrice + tax + shippingCharges;
    return <div className="MyCart">
        {/* <Header /> */}
        <div className="wrapper-cart">
            <div>
                <h5>Shipping Address(All fields required)</h5>
                <form>
                    <div className="input_one">
                        <input placeholder="Address-Line 1" type="text" />
                    </div><div>
                        <input placeholder="Address-Line 2" type="text" />
                    </div>
                    <div>
                        <select>
                            <option value="Russia">Russia</option>
                            <option selected value="Malaysia">Malaysia</option>
                            <option value="India">India</option>
                            <option value="Singapore">Singapore</option>
                        </select>
                    </div>
                    <select>
                        <option value="Moscow">Moscow</option>
                        <option selected value="KualaLumpur">KualaLumpur</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Singapore">Singapore</option>
                    </select>

                    <select>
                        <option value="Oblast">Oblast</option>
                        <option selected value="Selangor">Selangor</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
                <div className="button_properties">
                    <button onClick={handleEdit}> Save Button</button>
                    <button>Edit Address</button>
                </div>


            </div>
            <div className="shopping-bag">
                <h3>Shopping Bag</h3>
                {cartItems.map((i: any) =>
                    <div>
                        {i.title} : {i.price}
                    </div>
                )}
                <h3>Payment info : </h3>
                <div style={{ display: "grid" }}>
                    <span>Item Price: {itemPrice} </span>
                    <span>Tax: {tax} </span>
                    <span>Shipping Charges: {shippingCharges} </span>
                    <span>Total: {total} </span>
                </div>
                <div className="cart_ButtonsTwo">
                    <Link to="/checkout"><button onClick={() => {
                        buyNow(cartItems);
                        clearCart();
                        myOrders(cartItems);
                    }}>Checkout</button></Link>
                    <button onClick={clearCart}>Cancel</button>
                </div>
            </div>
        </div>
    </div>;
}


const mapStateToProps = (state: any) => ({
    cartItems: state.home.cartItems,
});

const mapDispatchToProps = {
    buyNow, clearCart, myOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);

