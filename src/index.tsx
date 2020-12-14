import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import MyOrder from './components/myOrder';
import myCart from './components/myCart';
import Header from './components/Header'
import Checkout from './components/Checkout'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './redux/reducers/reducer'
import configureStore from './redux/store';
import LoadContent from './components/loadContent';
// import {Provider} from 'react-redux';
// import store from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
    <Header />
      <Route path="/" exact component={Home} />
      <Route path="/myorders" component={MyOrder} />
      <Route path="/mycart" component={myCart} />
      <Route path="/checkout" component={Checkout} />
      <LoadContent />
    </Router>
   ,
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
