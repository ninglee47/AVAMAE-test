import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../pics/Logo.svg';

function Nav() {
    return (
        <div className="container">
          <div className="navBar">
            <Logo className='logo'/>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Link to="/contact-us">Contact Us</Link>
            <button>Log in</button>
          </div>
        </div>
    )
}

export default Nav;