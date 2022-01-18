import React from 'react'
import './searchform.css'

import {Badge} from "@material-ui/core"
import { Link, withRouter } from 'react-router-dom';
import {ShoppingCartOutlined } from '@material-ui/icons';

function MobileNav() {
    const quantity = null

    return (
        <>
            <div className="primary-mobile-nav header-v1" id="primary-mobile-nav" role="navigation">
                <a href="#" className="close-canvas-mobile-panel">×</a>
                <ul className="menu">
                    <li className="current-menu-item"><a href="/">Shop</a></li>
                    <li><a href="/our-menu" className="">Our Menu</a></li>
                    <li><a href="/categories" className="">Categories</a></li>
                    <li><a href="/" className="">About Us</a></li>
                    <li><a href="/" className="">Blog</a></li>
                    <li><a href="/" className="">Contact Us</a></li>
                    <li>
                    <Link to="/cart">
                        <Badge badgeContent={quantity} color="primary">
                                                  
                            <ShoppingCartOutlined/>
                        </Badge>
                        </Link>
                    </li>
                    <li className="extra-menu-item last-child">
                        <form className="sidebar-search-form">
                            <input className="search-field" placeholder="Search..." defaultValue="" name="s" type="search"/>
                            <button className="search-btn" type="submit">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default MobileNav
