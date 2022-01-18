import React, { Component } from 'react'
import './banner.css'

export default class Banner extends Component{
    render(){
        return(
            <React.Fragment>
                
                    <div className="container-fluid">

                   
                        <div className="row ">
                            <div className="col-lg-4 col-sm-4 px-3 py-3 px-lg-3">
                                <div className="banner-img d-flex align-items-center justify-content-center">
                                    <img src="/assets/products/product18.jpg" className="img-banner"/>
                                </div>
                                    
                            </div>

                            <div className="col-lg-4 col-sm-4 px-3 py-3 px-lg-3" >
                                <div className="banner-img d-flex align-items-center justify-content-center" 
                                >
                                <img src="/assets/products/product21.jpg" className="img-banner"/>

                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-4 px-3 py-3 px-lg-3">
                                <div className="banner-img d-flex align-items-center justify-content-center">
                                <img src="/assets/products/product20.jpg" className="img-banner"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                
                    </React.Fragment>
        )
    
    }
}