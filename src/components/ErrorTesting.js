import React from "react";

// bootstrap packages
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "../assets/footer.css";
import "../assets/nav.css"
import "../assets/main.css";
// import Footer from "./footer";
// import Navbar from "./Navbar";

class ErrorTesting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        const d = new Date()
        const year = d.getFullYear()

        if (this.state.counter === 1) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <>
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

            <h2>{this.state.counter}</h2>
            <button className="errorBtn" onClick={this.handleClick}>Click me</button>
            <footer>
                <p>GeoTech development. All rights reserved. </p>
                <small> &copy; {year}</small>
            </footer>        </>
    }
}

export default ErrorTesting;

//   const ErrorTesting = () =>{

//     const [error, setError] = useState(0)


// const errorClick = () => setError(error + 1);

// return{
//         if( error === 5){
//             throw new Error(" couter crashed!!")
//         }
//         return(
//             <>
//             <Navbar/>
//             <main>
//                 <h2>{error}</h2>
//                 <button onClick={errorClick} >Click 5 times</button>
//             </main>
//             <Footer/>
//             </>
//         )
//     }

//   }

//   export default ErrorTesting;