import { ArrowForwardIosSharp } from '@material-ui/icons'
import React, { Component } from 'react'
import './banner.css'

export default class SingleBanner extends Component{
    render(){
        return(
            <React.Fragment>
                <section>
                    <div className="container single-banner">

                   
                        <div className="row ">
                            {/* <div className="col-lg-12 col-sm-4 px-3 py-3 px-lg-3">
                                <div className="banner-img d-flex align-items-center justify-content-center">
                                    <img src="/assets/products/product18.jpg" className="img-banner"/>
                                </div>
                                    
                            </div> */}

                            <div className="col-12 col-lg-12 col-sm-12 px-3 py-3 px-lg-3" >
                                {/* <div className="container"> */}
                                <div className="banner-img d-flex align-items-center justify-content-around" style={{background: 'url(/assets/products/product7.jpg)'}}>

                                    <div className="promo-text" style={{width: '40%'}}>
                                        <h2 className="text-white">Suyaaa</h2>
                                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, placeat autem asperiores saepe esse dolorem odio obcaecati cupiditate</p>
                                        <a href="" className="promo-link">visit shop <ArrowForwardIosSharp className="promo-icon"/>
                                        <div className="promo-line"></div>
                                        </a>
                                    </div>

                                    <div className="d-none d-lg-block" >
                                        <img src="/assets/icon-startup.svg" className="promo-img"/>

                                    </div>
                                    
                                {/* </div> */}
                                </div>
                            </div>

                            {/* <div className="col-lg-4 col-sm-4 px-3 py-3 px-lg-3">
                                <div className="banner-img d-flex align-items-center justify-content-center">
                                <img src="/assets/products/product20.jpg" className="img-banner"/>
                                </div>
                            </div>  */}
                        </div>
                    </div>
                </section>
                    </React.Fragment>
        )
    
    }
}