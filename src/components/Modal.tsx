import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
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
                        {/* <img src={Logo} style={{ width: 100 }}></img> */}
                    </div>
                    <div>
                        <h3>Book Title : {props.bookData.title}</h3>
                        <div>Book Price :  {props.bookData.price} </div>
                        <div> Author Name :  {props.bookData.Author_Name} </div>
                        <div>Page Count :  {props.bookData.PageCount} </div>
                        <div>ISBN:{props.bookData.ISBN}</div>
                        <div className='cart_buttons'>
                            <button onClick={() => props.addToCart(props.bookData)}>Add to Cart</button>
                            <Link to="/checkout"><button onClick={() => props.buyNow(props.bookData)}>Buy Now</button></Link>
                        </div>
                        <div>
                            {props.bookData.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;