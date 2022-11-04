import React from "react";
import Footer from "./footer";
import Navbar from "./Navbar";

const Home = () =>{

    return(
        <>
        <Navbar />
        <main className="main">
            <h1>React Custom and useReducer Hooks Counter App</h1>
        </main>
        <Footer/>
        </>
    )
}

export default Home;