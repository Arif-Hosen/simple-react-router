import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <div className="header">
            <NavLink activeStyle={activeStyle}
                to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle}
                to="/friends">Friends</NavLink>
            <NavLink activeStyle={activeStyle}
                to="/about">About</NavLink>
            <NavLink activeStyle={activeStyle}
                to="/about/culture">Culture</NavLink>
        </div>
    );
};

export default Header;