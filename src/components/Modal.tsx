import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { start } from 'repl';
import * as Logo from '../myBooksListImages/Stamped.jpg'

type Iprops = {
    bookData: any;
    isShowing: Boolean;
    hide: any;
    addToCart: (i: any) => void;
    buyNow: (i: any) => void
}

const Modal = (props: Iprops) => props.isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal_overlay" />
        <div className="modal_wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal_header">
                    <button type="button" className="modal_closeButton" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div>
                    <div className="modal_image">
                    </div>
                    <div className="modal_properties">
                        <h3 style={{ color: "Blue", fontSize: 15, }}>Book Title : {props.bookData.title}</h3>
                        <div style={{ color: "Blue", fontSize: 15, }}>Book Price :  {props.bookData.price} </div>
                        <div style={{ color: "Blue", fontSize: 15, }}> Author Name :  {props.bookData.Author_Name} </div>
                        <div style={{ color: "Blue", fontSize: 15, }}>Page Count :  {props.bookData.PageCount} </div>
                        <div style={{ color: "Blue", fontSize: 15, }}>ISBN:{props.bookData.ISBN}</div>
                        <div className='cart_buttons'>
                            <button onClick={() => props.addToCart(props.bookData)}>Add to Cart</button>
                            <Link to="/checkout"><button onClick={() => props.buyNow(props.bookData)}>Buy Now</button></Link>
                        </div>
                        <div style={{ color: "Grey", fontSize: 15, }}>
                            Summary:  {props.bookData.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;