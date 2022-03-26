import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='navber'>
            <h3>Soft-hero</h3>
        <div>
        <a href="/product">Product</a>
                <a href="/orders">Orders</a>
                <a href="/service">Service</a>
                <a href="/about us">About Us</a>
        </div>
        </nav>
    );
};

export default Header;