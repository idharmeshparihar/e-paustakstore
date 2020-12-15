import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
//Importing Router to navigate between pages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import MyOrder from './components/myOrder';
import myCart from './components/myCart';
import Header from './components/Header'
import Checkout from './components/Checkout'
import { Provider } from 'react-redux';
import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/myorders" component={MyOrder} />
      <Route path="/mycart" component={myCart} />
      <Route path="/checkout" component={Checkout} />
    </Router>
   ,
 </Provider>,
  document.getElementById('root')
);
reportWebVitals();
