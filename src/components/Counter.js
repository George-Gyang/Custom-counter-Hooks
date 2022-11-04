import React, { useReducer } from "react";
import "../assets/main.css"
import Footer from "./footer";
import Navbar from "./Navbar";
// USE REDUCER HOOK COUNTER

const initialCount = {count : 0};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: state.count = 0 };
        default:
            throw new Error();

    }
}

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialCount)

    return (
        <>
        <Navbar />
            <main className="main">
                <h2> useReduer Counter Hook</h2>
                <div>
                    <label>
                        <input type="number" />
                    </label>
                </div>
                <div>
                    <h3>Count: {state.count}</h3>
                </div>
                <div className="btn-section">
                    <button className="btn" onClick={() => dispatch({type : "increment"})} >Increament</button>
                    <button className="reset-btn" onClick={() => dispatch({type : "reset"})} >Reset </button>
                    <button className="btn" onClick={() => dispatch({type : "decrement"})} >Decrement</button>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Counter;