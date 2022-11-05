import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/nav.css"

const Navbar = () => {

    return (
        <nav className="navbar">
            <ul>
                <li className="nav-links" ><NavLink to="/">home</NavLink> </li>
                <li className="nav-links" ><NavLink to="/counter">custom counter</NavLink> </li>
                <li className="nav-links" ><NavLink to="/useReducer">reducer counter</NavLink> </li>
                <li className="nav-links" ><NavLink to="/error_boundary">error testing</NavLink> </li>
            </ul>
        </nav>
    )
}
export default Navbar;