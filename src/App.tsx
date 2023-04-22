import React from "react";
import "./App.css";
import pages from "./pages";
const { Home, Detail, Login, Register } = pages;

function App() {
    return (
        <div className='App'>
            <Home></Home>
            <Detail></Detail>
            <Login></Login>
            <Register></Register>
        </div>
    );
}

export default App;

