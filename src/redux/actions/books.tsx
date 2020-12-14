import * as type from "../reducers/types";

interface fetchBooksAction {
  type: string;
  payload: any;
}

export const fetchBooks = (): fetchBooksAction => {
  console.log("TEST");
  fetch("db.json")
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      return { type: "FETCH_BOOKS_ASYNC", payload: data };
    });
  return { type: "FETCH_BOOKS_ASYNC", payload: "err" };
};

interface addToCartAction {
  type: string;
  payload: any;
}
export const addToCart = (i: any): addToCartAction => {
  return { type: "ADD_TO_CART", payload: i };
};

interface buyNowAction {
  type: string;
  payload: any;
}
export const buyNow = (i: any): buyNowAction => {
  return { type: "BUY_NOW", payload: i };
};

export const myOrders = (i: any): buyNowAction => {
  return { type: "MY_ORDERS", payload: i };
};

interface emptyBuyNowAction {
  type: string;
  payload: any;
}
export const emptyBuyNow = (i: any): emptyBuyNowAction => {
  return { type: "EMPTY_BUY_NOW", payload: i };
};

interface clearCartAction {
  type: string;
}
export const clearCart = (): clearCartAction => {
  return { type: "CLEAR_CART" };
};




// CLEAR_CART
