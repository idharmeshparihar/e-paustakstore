import React, { useState, useEffect } from 'react';
import Book from "./Book"
import { connect } from 'react-redux';
import { fetchBooks, addToCart, myOrders, buyNow } from '../redux/actions/books';
//import  {bookListLocal} from '../fixtures'; 

interface IProps {
    bookList: any;
    fetchBooks: () => { type: string, payload: any };
    addToCart: (i: any) => void
    buyNow: (i: any) => void
    myOrders: (i: any) => void
}

// interface BooksDispatchProps {
//     fetchBooks: () => { type: string, payload: any };
// }

const Home: React.FC<IProps> = ({ bookList, fetchBooks, addToCart, buyNow, myOrders }) => {

    useEffect(() => {
        console.log('mounted....');
        fetchBooks()
    }, []);
    console.log("bookList", bookList)
    return <div className="home">
        <div>
            <img
                className="home_image"
                src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/1_inr.jpg"
                alt=""

            />
        </div >
        {/* <button className="button-default" onClick={toggle}>Show Modal</button> */}

        {bookList ? <div className="booklist" >
            {bookList.map((i: any) => (
                <Book bookData={i} addToCart={(j: any) => addToCart(j)} buyNow={(k: any) => {
                    buyNow(k);
                    myOrders(k)
                }
                } />
            ))}
        </div> : ""}
    </div>
}

const mapStateToProps = (state: any) => ({
    bookList: state.home.bookList,
});

const mapDispatchToProps = {
    fetchBooks, addToCart, buyNow, myOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);