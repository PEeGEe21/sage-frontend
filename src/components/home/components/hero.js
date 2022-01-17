import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import '../style.css'
import './hero.css'
// import styled from 'styled-components'

// const Container = Styled.div`

// `

const state={
	responsive:{
		0:{
			items:1
		},
		650:{
			items:1
		},			
		1024:{
			items:1
		},
		1200:{
			items:1
		}
	}
}

export default function Hero(){
    return(
        <React.Fragment>
            <section className="slider">
		
				<div className="home_slider_container">
					
				<OwlCarousel 
                        items={1} 
                        className="owl-theme testimonial px-1 px-lg-5" 
                        loop
                        nav 
                        margin={10} 
                        autoplay={false}
                        smartSpeed= {800}
                        autoplaySpeed= {200}
                        navspeed= {1000}
                        paginationspeed= {1000}
                        slidespeed={1000}
                        dots={false} 
                        responsive={state.responsive}
                        >
					{/* <div className="owl-carousel owl-theme home_slider owl-loaded owl-drag"> */}
						

                                <div className="container">

                                    <div className="row  d-flex align-items-center justify-content-between">
                                        <div className="col-lg-6 col-md-7 col-sm-12 ">
                                            <div className="subtext">lorem Ipsum Dolor</div>
                                            <div className="caption">lorem Ipsum Dolor <br/>kscs snksc </div>
                                            <div className="paratext">Get started, Create an account and start enjoying our service</div>

                                            {/* <div className="card h-100 border-0 p-3 p-lg-3">
                                                <div className="card-body mb-5 ">
                                                    <h1 className="mt-4 mb-3">
                                                        We are a well known courier service
                                                    </h1>
                                                    <span className="lined mb-3"></span>
                                                    <p className="mb-4 h6">
                                                        Get started, Create an account and start enjoying our service
                                                    </p>
                                                        <a href="" className="btn btn-outline-primary h-12 d-flex justify-content-between align-items-center arrow-link px-3">Get Started <span>
                                                            <i className="fa fa-arrow-right mini-icon"></i>
                                                        </span>
                                                    </a>


                                                    
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="col-lg-6 col-md-5 col-sm-12 d-none d-lg-block">
                                            <div className=" hero-main-img d-flex align-items-center justify-content-between" style={{width: '500px'}}>
                                                <div className=" hero-main-img-div">

                                                <img src="/assets/FoodPhotography.jpg" className="img-fluid" style={{height: '470px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ', objectFit:'cover', border: '4px solid #000'}} loading="lazy"/>

                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div> 

                                <div className="container">
                                    <div className="row  d-flex align-items-center justify-content-between">
                                        <div className="col-lg-6 col-md-5 col-sm-12 d-none d-lg-block">
                                            <div className=" d-flex align-items-center justify-content-between" style={{width: '500px'}}>

                                            <div className=" hero-main-img-div" >

                                                <img src="/assets/FoodPhotography.jpg" className="img-fluid" style={{height: '470px', borderRadius: '69% 31% 40% 60% / 51% 64% 36% 49% ', objectFit:'cover', border: '4px solid #000'}} loading="lazy"/>

                                                </div>

                                                {/* <img src="/assets/icon-startup.svg" className="img-fluid" style={{height: '470px'}}/> */}
                                            </div> 
                                        </div>
                                        <div className="col-lg-6 col-md-7 col-sm-12 ">
                                            <div className="subtext">lorem Ipsum Dolor</div>
                                            <div className="caption">lorem Ipsum Dolor <br/>kscs snksc </div>
                                            <div className="paratext">Get started, Create an account and start enjoying our service</div>
                                        </div>
                                    </div>
                                </div> 

                                
                                
                           
						
						
						
					{/* </div> */}
					</OwlCarousel>

					<div className="home_slider_nav d-flex flex-column align-items-center justify-content-center">
					</div>
				</div>
			</section>
        </React.Fragment>
    )
}