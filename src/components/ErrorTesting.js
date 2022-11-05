import React from "react";
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
            <nav className="navbar">
                <ul>
                    <li className="nav-links" ><a href="/">home</a> </li>
                    <li className="nav-links" ><a href="/counter">custom counter</a> </li>
                    <li className="nav-links" ><a href="/useReducer">reducer counter</a> </li>
                    <li className="nav-links" ><a href="/error_boundary">error testing</a> </li>
                </ul>
            </nav>
            <h2>{this.state.counter}</h2>
            <button className="errorBtn" onClick={this.handleClick}>Click me</button>
            <footer>
                <p>GeoTech development. All reserved. </p>
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