import React from "react";
import useModal from "./useModal";
import Modal from "./Modal";

import { Link } from "react-router-dom";

type IProps = {
    bookData: any;
    addToCart: (i: any) => void;
    buyNow: (i: any) => void;
};

const Book = (props: IProps) => {
    const { isShowing, toggle }: { isShowing: Boolean; toggle: any } = useModal();
    return (
        <div className="book">
            <span className="image_book">
                <img></img>
            </span>
            <span className="book_properties_wrapper">
                <span className="book_properties" onClick={toggle}>
                    Title: {props.bookData.title}
                </span>
                <span className="book_properties" onClick={toggle}>
                    Author : {props.bookData.Author_Name}
                </span>
                <span className="book_properties">
                    <Link to="/checkout">
                        <button
                            style={{ backgroundColor: "Pink", cursor: "Pointer" }}
                            onClick={(i: any) => props.buyNow([props.bookData])}
                        >
                            Buy Now
            </button>
                    </Link>
                </span>
            </span>
            <Modal
                bookData={props.bookData}
                isShowing={isShowing}
                hide={toggle}
                addToCart={(i: any) => {
                    console.log("addToCart..", i);
                    props.addToCart(i);
                }}
                buyNow={(k: any) => props.buyNow([props.bookData])}
            />
        </div>
    );
};

export default Book;
