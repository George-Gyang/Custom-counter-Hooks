import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Counter from "./Counter";
import { Alert, AlertIcon, AlertTitle, AlertDescription, ChakraProvider } from '@chakra-ui/react'

import "../assets/main.css"
import Footer from "./footer";
import Navbar from "./Navbar";


// USESTATE HOOK COUNTER

const CustomHook = () => {
    const [count, setCount] = useState(0);
    let [alert, setAlert] = useState("none")

    // handle onClick event
    const increment = () => {
        setCount(count + 1)
        setAlert("none")
    };

    const decrement = () => {
        // setCount(count -1)
        if (count < 1) {
            setAlert(" ")
        }
        else {
            setCount(count - 1)
        }
    };

    const reset = () => {
        setCount(0)
    };

    // Handling onChange event
    // const [change, setChange] = useState("")
    const handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        // const inputValue = e.target.value
        let inputValue = e.target.value - 1 + 1;
        if (inputValue < 0) {
            setCount(count)
            // e.target.value = ""
            setAlert(" ")
        } else {
            setCount(inputValue)
            // e.target.value = ""
            setAlert("none")
        }
        e.target.value = ""
        // setCount(inputValue)
        // e.target.value = ""

    }


    return (
        <>
            <Navbar />
            <main className="main">
                <h2 style={{ fontSize: "2rem" }}> Custom Counter Hook</h2>
                <div>
                    <label>
                        <input type="number" onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <h3>Count: {count}</h3>
                </div>
                <div className="btn-section">
                    <button className="btn" onClick={decrement} disabled={count < -1 ? true : false} >Decrement</button>
                    <button className="reset-btn" onClick={reset} >Reset </button>
                    <button className="btn" onClick={increment} >Increment</button>
                </div>
                <ChakraProvider>
                    <Alert status='warning' display={alert}>
                        <AlertIcon />
                        <AlertTitle>Negative!!</AlertTitle>
                        <AlertDescription>Numbers below 0 are not allowed.</AlertDescription>
                    </Alert>
                </ChakraProvider>

            </main>
            <Footer />
        </>
    )
}

export default CustomHook;

