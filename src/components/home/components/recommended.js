import React, { Component, useState, useEffect } from 'react'

import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './recommended.css'
import {RecommendedProducts} from './../../data'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'
import LikeButton from './likebutton';







class Recommended extends Component {
  // function Sidebar() {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
        categories: [],
        products: [],
        Open: false,
        productsData: [],
        itemsToShow: 0,
        usersToShow: 0,
        expanded: false,
        userExpanded: false,
        color: false
    };

    this.showMore = this.showMore.bind(this);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.showMoreUsers = this.showMoreUsers.bind(this);
  }

  onHandleOpen = () => {
    this.setState({
      open: true,
    });
  };



  onHandleClose = () => {
    this.setState({
      open: false,
    });
  };

  onFavoriteClick = (e) => {
    e.preventDefault();
    if (this.state.color === true){
        this.setState({
          color: true
        })
    }else{
      this.setState({
        color: false
      })
    }
    
    console.log(this.state.color)
  }



  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/api/products/?is_recommended=True')
      .then((response) => {
          // console.log(response.data)
        this.setState({
            productsData: response.data,
        });

        // console.log(this.state.productsData);
      })
      .catch((error) => {
        console.log('Error');
      });

    this.getPopularProducts();
    this.showMoreUsers();
    this.showMore();
  }



  getPopularProducts() {
    const products = {
        products: this.state.products,
    };

    
  }

  showMore() {
    this.state.itemsToShow === 4
      ? this.setState({
          itemsToShow: this.state.categoriesData.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: 4, expanded: false });
  }

  showMoreUsers() {
    this.state.usersToShow === 4
      ? this.setState({
          usersToShow: this.state.productsData.length,
          userExpanded: true,
        })
      : this.setState({ usersToShow: 4, userExpanded: false });
  }



  render() {

    return (



                <section className="bg-white ">
                    <div className="container">
                        <div className="row d-flex align-items-center text-center justify-content-center">
                            <div className="col-12 ">
                                <div className="section-title  mb-4 pb-4">
                                    <h2>Recommended</h2>

                                </div>
                            </div>
                        </div>
                        {/* <OwlCarousel 
                        items={4} 
                        className="owl-theme recommended px-1 px-lg-5" 
                        
                        nav 
                        margin={10} 
                        autoPlay={true}
                        smartSpeed= {800}
                        autoplaySpeed= {2000}
                        navspeed= {1000}
                        paginationspeed= {1000}
                        slidespeed={1000}
                        dots={false} 
                        responsive={state}
                        
                        > */}
                        <div className="row recommended">
                        {this.state.productsData.sort(()=> Math.random() - Math.random())
                        .slice(0, 4).map((prod, i)=>(
                            <div className="col-lg-3 col-md-6 col-sm-12" key={prod.id}>
                                <div className="item p-3" >
                                    <Link to={`/our-menu/product/${prod.id}`}>
                                    <div className="card h-100 text-center reco-img">
                                        <img  className="mr-2 card-img-top img-fluid reco img-loop" src={prod.image} alt={prod.name} />
                                    </div>  
                                    </Link>
                                    <div className="my-3 text-center">
                                        <h4>
                                        <Link className="kt-widget5__title " to={`/our-menu/product/${prod.id}`}>
                                        {prod.name}
                                        </Link>
                                        </h4>
                                        <div className=" my-2">
                                        {
                                        prod.deleted_price &&

                                            <span className="mr-3 d-inline-block" style={{marginRight:"10px"}}>
                                                <del> $<span>{prod.deleted_price}</span></del>
                                            </span>
                                        }
                                            {prod.price && 
                                            <span className="kt-widget5__desc pl-4"> 
                                              $<span>{ prod.price}</span>
                                            </span>
                                            }
                                        </div>
                                        
                                    </div>
                                    <div className=" d-flex justify-content-center align-items-center mt-3"> 
                                        {/* <button className="btn btn-outline-dark mr-3" onClick={this.onFavoriteClick}>
                                          {this.state.color ? <i className="fa fa-heart" style={{color: 'red'}}></i> : <i className="far fa-heart"></i> }
                                          
                                          
                                          </button> */}
                                          <LikeButton/>

                                        
                                        <Link className="btn btn-outline-dark order " to={`/our-menu/product/${prod.id}`}>
                                            Order Now <i className="fas fa-cart-plus ml-1"></i>
                                        </Link>
                                    
                                    </div> 
                                </div>    
                            </div>
                        ))}
                        </div>

                            {/* </OwlCarousel> */}
                        
                        
                    </div>
                </section>
      
    );
  }
}

export default Recommended;