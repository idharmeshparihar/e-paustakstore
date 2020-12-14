import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { emptyBuyNow } from '../redux/actions/books';

type IProps = {
    buyItems: any;
    emptyBuyNow: (i: any) => void
}

const Checkout: React.FC<IProps> = ({ buyItems, emptyBuyNow }) => {
    console.log("buyItems", buyItems);
    useEffect(() => () => {
        console.log("unmount");
        emptyBuyNow([])
    }, []);

    return <div className="checkout">
        <span style={{ color: "green", fontSize: 30, padding: 10 }}>  YAY !! YOUR ORDER HAS BEEN PLACED</span>
        <div style={{ color: "red", fontSize: 20, padding: 20 }}>
            {buyItems.map((i: any) =>
                <div>
                    {i.title}
                </div>
            )}
        </div>
    </div>
}


const mapStateToProps = (state: any) => ({
    buyItems: state.home.buyItems,
});

const mapDispatchToProps = {
    emptyBuyNow
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

