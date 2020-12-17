import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom' 
import {ButtonContainer} from './Button';



export default class Details extends Component {
    render() {
        return (
 <ProductConsumer>
        { value => {
         const { id , company , img ,info , price , title , inCart} =value.detailProduct;
        return (
        <div className="container py-5">
         {/* title */}
        <div className="row">
        <div className="col-10 mx-auto text-center 
        text-slanted text-blue my-5">
        <h1>{title}</h1>    
        </div>
        </div>
        {/* End Title */}
        {/* Product  Info Start */}
        <div className="row">
        {/* Product image */}
        <div className="col-10 mx-auto col-md-6 my-3">
            <img src={img}  className="img-fluid" alt="product image"/>
        </div>
        {/* Product Text start */}
        <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
        <h2> model : {title}</h2>
        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            Made By: <span className="text-uppercase">
                {company}
            </span>
        </h4>
        <h4 className="text-blue">
            <strong>
                Price : <span>Rs</span>
                {price}
            </strong>
        </h4>
        <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Info About Product : 
        </p>
        <p className="text-muted lead">
            {info}
        </p>
        {/* Buttons */}
        <div className="">
            <Link to= "/">
            <ButtonContainer>
                Back To Products
            </ButtonContainer>
            </Link>
            <ButtonContainer 
            cart
            disabled = {inCart ? true : false}
            onClick = {()=>{
                value.addToCart(id);
                value.openModal(id);

            }}
            >
            {inCart ? "in Cart" : "Add To Cart"}
            </ButtonContainer>
        </div>
        </div> 
        </div>
        {/* Product Info End */}
        </div>
        )
    }}
</ProductConsumer>
    );
  }
}
