import React from "react";
import "../assets/style.css"

function MainApp() {

    return (
        <>
            <main className="main">
                <h1> Custom Counter Hook</h1>
                <div>
                    <label>
                        <input type="number" />
                    </label>
                </div>
                <div>
                    <h3>Count:0</h3>
                </div>
                <div className="btn-section">
                    <button className="btn ">Decreament</button>
                    <button className="reset-btn">Reset </button>
                    <button className="btn ">Increament</button>
                </div>
            </main>
        </>
    )
}

export default MainApp