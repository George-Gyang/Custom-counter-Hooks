import React from "react";
import { NavLink } from "react-router-dom";
// import "bootstrap";

// bootstrap packages
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import $ from "jquery"
// import popper from "popper.js"

import "../assets/nav.css"

const Navbar = () => {

    return (
        // <nav className="navbar">
        //     <ul>
        //         <li className="nav-links" ><NavLink to="/">home</NavLink> </li>
        //         <li className="nav-links" ><NavLink to="/counter">custom counter</NavLink> </li>
        //         <li className="nav-links" ><NavLink to="/useReducer">reducer counter</NavLink> </li>
        //         <li className="nav-links" ><NavLink to="/error_boundary">error testing</NavLink> </li>
        //     </ul>
        // </nav>
        <nav id="navbar" class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler toggle-btn bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-light"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ul-nav">
                        <li className="nav-links nav-item">
                            <NavLink to="/">home</NavLink>
                        </li>
                        <li className="nav-links nav-item">
                            <NavLink to="/counter">custom counter</NavLink>
                        </li>
                        <li className="nav-links nav-item">
                            <NavLink to="/useReducer">reducer counter</NavLink>
                        </li>
                        <li className="nav-links nav-item">
                            <NavLink to="/error_boundary">error testing</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;