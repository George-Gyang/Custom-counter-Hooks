import React from "react";
import Footer from "./footer";
import Navbar from "./Navbar";

const ErrorPage = () => {

    return (
        <>
            <Navbar />
            <main className="main">
                <div className="no-page">
                    <h2>PAGE NOT FOUND!</h2>
                    <p>This page doesn’t exist.</p>
                    <p>please chech the URL and try again</p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ErrorPage;