import React from "react";
import "../assets/footer.css";
import "../assets/nav.css"
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
                    <nav className="navbar">
                        <ul>
                            <li className="nav-links" ><a href="/">home</a> </li>
                            <li className="nav-links" ><a href="/counter">custom counter</a> </li>
                            <li className="nav-links" ><a href="/useReducer">reducer counter</a> </li>
                            <li className="nav-links" ><a href="/error_boundary">error testing</a> </li>
                        </ul>
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