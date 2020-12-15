import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { buyNow, clearCart, myOrders, saveAddress } from '../redux/actions/books';


type IProps = {
    cartItems: any;
    storeAddress:any
    buyNow: (i: any) => void;
    clearCart: () => void;
    myOrders: (i: any) => void
    saveAddress: (i: any) => void
}

const MyCart: React.FC<IProps> = ({ cartItems, buyNow, clearCart, myOrders, saveAddress,storeAddress }) => {

    const [address, setaddress] = useState(storeAddress.address);
    const [addressTwo, setaddressTwo] = useState(storeAddress.addressTwo)
    const [country, setCountry] = useState(storeAddress.country)
    const [city, setCity] = useState(storeAddress.city)
    const [countryState, setCountryState] = useState(storeAddress.countryState)


    const handleSave = () => {
        console.log("handlesave",address,addressTwo,country);
        let completeAdress = {
            address:address,
            addressTwo:addressTwo,
            country:country,
            city:city,
            countryState:countryState
        }
        saveAddress(completeAdress);
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
        <div className="wrapper-cart">
            <div>
                <h5>Shipping Address(All fields required)</h5>
                <form >
                    <div className="input_one">
                        <input placeholder="Address-Line 1" type="text" value={address} onChange={(e:any)=>setaddress(e.target.value)}/>
                    </div>
                    <div>
                        <input placeholder="Address-Line 2" type="text" value={addressTwo} onChange={(e:any)=>setaddressTwo(e.target.value)}/>
                    </div>
                    <div>
                        <select value={country} onChange={(e:any)=>setCountry(e.target.value)}>
                            <option value="Russia">Russia</option>
                            <option selected value="Malaysia">Malaysia</option>
                            <option value="India">India</option>
                            <option value="Singapore">Singapore</option>
                        </select>
                    </div>
                    <select value={city} onChange={(e:any)=>setCity(e.target.value)}>
                        <option value="Moscow">Moscow</option>
                        <option selected value="KualaLumpur">KualaLumpur</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Singapore">Singapore</option>
                    </select>

                    <select value={countryState} onChange={(e:any)=>setCountryState(e.target.value)} >
                        <option value="Oblast">Oblast</option>
                        <option selected value="Selangor">Selangor</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </form>
                <div className="button_properties">
                    <button style={{ backgroundColor: "lightgreen" }} onClick={handleSave}> Save Button</button>
                    <button style={{ backgroundColor: "lightgreen" }}>Edit Address</button>
                </div>


            </div>
            <div className="shopping-bag">
                <h3 style={{ color: "Grey" }} >Shopping Bag</h3>
                {cartItems.map((i: any) =>
                    <div>
                        {i.title} :  ₹{i.price}
                    </div>
                )}
                <h3 style={{ color: "Grey", marginTop: "60px" }} >Payment info : </h3>
                <div style={{ display: "grid" }}>
                    <span>Item Price:  ₹{itemPrice} </span>
                    <span>Tax:  ₹{tax} </span>
                    <span>Shipping Charges: ₹ {shippingCharges} </span>
                    <span>Total:  ₹{total} </span>
                </div>
                <div className="cart_ButtonsTwo">
                    <Link to="/checkout"><button style={{ backgroundColor: "lightgreen" }} onClick={() => {
                        buyNow(cartItems);
                        clearCart();
                        myOrders(cartItems);
                    }}>Checkout</button></Link>
                    <button style={{ backgroundColor: "lightgreen" }} onClick={clearCart}>Clear Cart</button>
                </div>
            </div>
        </div>
    </div >;
}


const mapStateToProps = (state: any) => ({
    cartItems: state.home.cartItems,
    storeAddress: state.home.storeAddress
});

const mapDispatchToProps = {
    buyNow, clearCart, myOrders, saveAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);

