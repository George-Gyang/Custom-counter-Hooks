import React, { useReducer, useRef } from "react";
import "../assets/main.css"
import Footer from "./footer";
import Navbar from "./Navbar";
// USE REDUCER HOOK COUNTER

function useCounterReducer() {

    const initialCount = { count: 0, };

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            case "reset":
                return { count: initialCount.count };
            case "setInput":
                return {...state, count: action.payload }
            default:
                return state;
                // throw new Error();

        }
    }


    const [state, dispatch] = useReducer(reducer, initialCount);

    return [state, dispatch];
}

const Counter =() =>{

    const [state, dispatch] = useCounterReducer({count: 0})
    const inputRef = useRef(null);

    const setInput =() =>{
        if(inputRef.current.value === ""){
            return state.count;
        }
        else{
            dispatch({type: "setInput", payload: Number(inputRef.current.value)});
            inputRef.current.value = "";
        }
    }

    console.log(state.count)

    return(
        <>
            <Navbar />
            <main className="main">
                <h2> useReducer Counter Hook</h2>
                <div>
                    <label>
                        <input ref={inputRef} type="number" name="value" onChange={setInput} />
                    </label>
                    {/* <button onClick={setInput}>set</button> */}
                </div>
                <div>
                    <h3>Count: {state.count}</h3>
                </div>
                <div className="btn-section">
                    <button className="btn" onClick={() => dispatch({ type: "increment" })} >Increament</button>
                    <button className="reset-btn" onClick={() => dispatch({ type: "reset" })} >Reset </button>
                    <button className="btn" onClick={() => dispatch({ type: "decrement" })} disabled={state.count < 1 ? true : false} >Decrement</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Counter;