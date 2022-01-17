import React from 'react'

function MobileNav() {
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
                    <li className="extra-menu-item menu-item-search last-child">
                        <a href="#" className="toggle-search"><i className="fa fa-search" aria-hidden="true"></i></a>
                        <form className="search-form">
                            <input className="search-field" placeholder="Search..." defaultValue="" name="s" type="search"/>
                            <input className="search-submit" defaultValue="Search" type="submit"/>
                        </form>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default MobileNav
