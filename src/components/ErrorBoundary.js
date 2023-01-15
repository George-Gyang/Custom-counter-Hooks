import React from "react";
import "../assets/footer.css";
import "../assets/nav.css";
import "../assets/main.css";
// import { NavLink } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        const d = new Date()
        const year = d.getFullYear()

        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    {/* <nav className="navbar">
                        <ul>
                            <li className="nav-links" ><a href="/">home</a> </li>
                            <li className="nav-links" ><a href="/counter">custom counter</a> </li>
                            <li className="nav-links" ><a href="/useReducer">reducer counter</a> </li>
                            <li className="nav-links" ><a href="/error_boundary">error testing</a> </li>
                        </ul>
                    </nav> */}

<nav id="navbar" class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler toggle-btn bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ul-nav">
                            <li className="nav-links nav-item">
                                <a href="/">home</a>
                            </li>
                            <li className="nav-links nav-item">
                                <a href="/counter">custom counter</a>
                            </li>
                            <li className="nav-links nav-item">
                                <a href="/useReducer">reducer counter</a>
                            </li>
                            <li className="nav-links nav-item">
                                <a href="/error_boundary">error testing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                    <footer>
                        <p>GeoTech development. All rights reserved. </p>
                        <small> &copy; {year}</small>
                    </footer>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;