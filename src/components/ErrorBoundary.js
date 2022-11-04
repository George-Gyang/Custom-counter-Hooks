import React from "react";
import Footer from "./footer";
import Navbar from "./Navbar";

const ErrorBoundary = () =>{
    return(
        <>
        <Navbar/>
        <main>
            <h2>
                Error Boundary files
            </h2>
        </main>
        <Footer/>
        </>
    )
}

export default ErrorBoundary;