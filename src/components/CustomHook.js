import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Counter from "./Counter";
import "../assets/main.css"
import Footer from "./footer";
import Navbar from "./Navbar";


// USESTATE HOOK COUNTER

const CustomHook = () => {
    const [count, setCount] = useState(0);

    // handle event

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <>
        <Navbar />
            <main className="main">
                <h2> Custom Counter Hook</h2>
                <div>
                    <label>
                        <input type="number" />
                    </label>
                </div>
                <div>
                    <h3>Count: {count}</h3>
                </div>
                <div className="btn-section">
                    <button className="btn" onClick={increment} >Increment</button>
                    <button className="reset-btn" onClick={reset} >Reset </button>
                    <button className="btn" onClick={decrement} >Decrement</button>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default CustomHook;
