import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/style.css"

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">home</NavLink> </li>
                <li><NavLink to="/counter">Custom Hook Counter</NavLink> </li>
                <li><NavLink to="/useReducer">useReducer Hook Counter</NavLink> </li>
                <li><NavLink to="/error_boundary">Error Boundary</NavLink> </li>
            </ul>
        </nav>
    )
}
export default Navbar;