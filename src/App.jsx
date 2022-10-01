import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
const App = () =>{

    return(
        <>
           
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        </>
    )
}

export default App