import * as type from "./types";
// Define all reducers
const intialState = {
  bookList: [],
  basket: [],
  cartItems: [],
  buyItems: [],
  myOrders: [],
  storeAddress: {},
};

export default function (state = intialState, action) {
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
    case type.SAVE_ADDRESS:
      return {
        ...state,
        storeAddress: { ...state.storeAddress, ...action.payload },
      };
    default:
      return state;
  }
}
