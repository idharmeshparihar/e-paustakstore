import * as type from "./types";

const intialState = {
  bookList: [],
  basket: [],
  cartItems: [],
  buyItems: [],
  myOrders: [],
};

export default function (state = intialState, action) {
  console.log("data2", action);
  switch (action.type) {
    case type.FETCH_BOOKS:
      return {
        ...state,
        bookList: action.payload.bookList,
      };
    case type.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, ...[action.payload]],
      };
    case type.BUY_NOW:
      return {
        ...state,
        buyItems: [...state.buyItems, ...action.payload],
      };
    case type.EMPTY_BUY_NOW:
      return {
        ...state,
        buyItems: [],
      };
    case type.MY_ORDERS:
      return {
        ...state,
        myOrders: [...state.myOrders, ...action.payload],
      };
    case type.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
}

//case "ADD_TO_BASKET":
//Logic
// return{
//   ...state,
//   basket:[...state.basket, action.item],
// }
//break;
//case "REMOVE_FROM_BASKET":
//LOGIC
//break;
