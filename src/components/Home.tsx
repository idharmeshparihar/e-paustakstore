import React, { useState, useEffect } from 'react';
import Book from "./Book"
import { connect } from 'react-redux';
import { fetchBooks, addToCart, myOrders, buyNow } from '../redux/actions/books';
import LoadContent from './loadContent';

interface IProps {
    bookList: any;
    fetchBooks: () => { type: string, payload: any };
    addToCart: (i: any) => void
    buyNow: (i: any) => void
    myOrders: (i: any) => void
}

const Home: React.FC<IProps> = ({ bookList, fetchBooks, addToCart, buyNow, myOrders }) => {
    useEffect(() => {
        console.log('mounted....');
        fetchBooks()
    }, []);
    return <div className="home">
        <div>
            <img
                className="home_image"
                src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/1_inr.jpg"
                alt=""

            />
        </div >
        {bookList ? <div className="booklist" >
            {bookList.map((i: any) => (
                <Book bookData={i} addToCart={(j: any) => addToCart(j)} buyNow={(k: any) => {
                    buyNow(k);
                    myOrders(k)
                }
                } />
            ))}
        </div> : ""}
        {/* <LoadContent/> */}
    </div>
}

const mapStateToProps = (state: any) => ({
    bookList: state.home.bookList,
});

const mapDispatchToProps = {
    fetchBooks, addToCart, buyNow, myOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);