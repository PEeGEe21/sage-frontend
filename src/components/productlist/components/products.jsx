import React from 'react'
import {AllMenu} from './../../data'
import Product from '../../home/components/product'
import '../../home/components/category.css'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import './ourMenu.css'

import { useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';





const Products = ({products, filteredProducts}) => {
    const location = useLocation();
    // console.log(filteredProducts)
    
    const cat = (location.pathname.split("/")[2]);


    const getProductRow = () =>{
        return products.map((prod)=>{
            return(
                <div className="col-lg-3 col-md-6 col-sm-12 our-menu" key={prod.id}>
                    <div className="item p-3" >
                        <Link to={`/our-menu/product/${prod.id}`}>
                            <div className="card h-100 text-center" >

                            {prod.image ? 
                                <img  className="mr-2 card-img-top img-fluid img-loop" src={prod.image} alt={prod.name} />
                                                                : (
                                <img  className="mr-2 card-img-top img-fluid img-loop" src="/assets/service1.jpg"  />

                                    )}
{/* <span className=""> */}
    <a className="menu-cart-icon" href={`/our-menu/product/${prod.id}`}>
        <i className="fas fa-cart-plus ml-1"></i>
    </a>
{/* </span> */}

                                {/* <img  className="mr-2 card-img-top img-fluid img-loop" src={prod.image}  /> */}
                            </div>
                        </Link>
                        <div className="my-3 text-left">
                            <h4>
                            <a className="kt-widget5__title " href={`/our-menu/product/${prod.id}`}>
                                {prod.name}
                            </a>
                            </h4>
                            <div className=" my-2">
                                
                                    {
                                        prod.deleted_price && 
                                        <span className="mr-3" style={{marginRight:"10px"}}>

                                            <del>$<span>{prod.deleted_price}</span></del>
                                        </span>

                                    }
                                        
                                
        
                                {prod.price ? 
                                <span className="kt-widget5__desc pl-4">$<span>{prod.price}</span></span>: (
                                        <span className="bg-danger text-white p-2">No price yet</span> 
                                    )}
                            </div>
                                
                            {/* <a className="btn btn-outline-dark order " href={`/our-menu/product/${prod.id}`}>
                                Order Now <i className="fas fa-cart-plus ml-1"></i>
                            </a>            */}
                        </div>
                    </div>    
                            
                </div>
            )
        })
    
        
    }

        return(
            <React.Fragment>
                <section>
                    <div className="kt-portlet container">
                        
                        <div className="row">
                                {getProductRow()}
                        </div>


                    </div>

                    
                </section>
            
            </React.Fragment>
        )
    }
    
export default Products;


