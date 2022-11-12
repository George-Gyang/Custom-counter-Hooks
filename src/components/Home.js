import React from "react";
import Footer from "./footer";
import Navbar from "./Navbar";

const Home = () => {

    return (
        <>
            <Navbar />
            <main className="main">
                <h1>React Custom and useReducer Hooks Counter App</h1>
                <p>
                    Setting a counter that increment, decrement, setValue, and reset, Implemented using custom hook
                    and a combination of states with a useReducer. showing 404 page and error boundary testing page
                </p>
            </main>
            <Footer />
        </>
    )
}

export default Home;