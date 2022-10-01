import React from "react";
import { Route,Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Day_1 from "./Day_1";
import Day_2 from "./Day_2";
import Day_3 from "./Day_3";
import Day_4 from "./Day_4";
import Day_5 from "./Day_5";
import Error from "./Error";
import Navbar from "./Navbar";
// import Contact from "./Contact";

const Home = ()=>{

 
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element = {<About/>}/>
            <Route exact path="/day-1" element = {<Day_1/>}/>
            <Route path="/day-2" element = {<Day_2/>}/>
            <Route path="/day-3" element = {<Day_3/>}/>
            <Route path="/day-4" element = {<Day_4/>}/>
            <Route path="/day-5" element = {<Day_5/>}/>
            <Route  path="/contact" element = {<Contact/>} />
            <Route path="*" element ={<Error/>}  />

        </Routes>
        {/* <About/>
        <Contact/> */}
        </>
    )
}

export default Home;