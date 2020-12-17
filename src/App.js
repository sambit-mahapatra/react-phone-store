
import React , {Component, components} from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductLists from './components/ProductLists';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Modal from './components/Modal';

class App extends Component{
  render(){
    return( 
        <React.Fragment>
          <Navbar/>
          <Switch>
            <Route exact path="/" component ={ProductLists} />
            <Route  path="/details" component ={Details} />
            <Route  path="/cart" component ={Cart} />
            <Route component ={Default} />
          </Switch>
          <Modal/>
        </React.Fragment>
    );
  }
}

export default App;
 