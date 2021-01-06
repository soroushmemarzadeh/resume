import React from "react"
import "./navbar.css"
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Navbar = ({ sticky }) => (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
        <div className="navbar--logo-holder">
            <h1> Memarzade</h1>
            <span>changeTheme</span>
        </div>
        <ul className="navbar--link">
            <li className="navbar--link-item"><Link activeClass="active" to="title" spy={true} smooth={true} duration={1000}>
                Title
        </Link></li>
            <li className="navbar--link-item"><Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                about
        </Link></li>
            <li className="navbar--link-item"><Link activeClass="active" to="skill" spy={true} smooth={true} duration={1000}>
                skills
        </Link></li>
        </ul>
    </nav>
)
export default Navbar