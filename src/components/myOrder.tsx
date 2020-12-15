import React from "react";
import { connect } from 'react-redux';

type IProps = {
    myOrders: any;
}

//My Order Component

const MyOrder: React.FC<IProps> = ({ myOrders }) => {
    console.log("myOrders", myOrders);

    return <div className="my_orders">
        <span style={{ display: "flex", color: "green", fontSize: 30, padding: 10 }}>  My Orders:</span>
        <div style={{ color: "red", fontSize: 20, padding: 20 }}>
            {myOrders.map((i: any) =>
                <div>
                    {i.title}
                </div>
            )}
        </div>
    </div>
}


const mapStateToProps = (state: any) => ({
    myOrders: state.home.myOrders,
});


export default connect(mapStateToProps)(MyOrder);

