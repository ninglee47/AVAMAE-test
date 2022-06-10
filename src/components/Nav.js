import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../pics/Logo.svg';

function Nav() {
    return (
        <nav>
            <h3>Company</h3>
            <ul>
                <Logo className='logo'/>
                <Link to="/">Home</Link>
                <Link to="/about-us">About</Link>
                <Link to="/contact-us">Contact Us</Link>
                <button>Log in</button>
                <li>Contact Us</li>
            </ul>

        </nav>
    )
}

export default Nav;