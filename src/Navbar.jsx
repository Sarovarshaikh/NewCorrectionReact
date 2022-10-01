import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'
const Navbar = ()=>{
    return(
        <>
        <h1 style={{color:"blue" ,textAlign:"center", fontSize:"40px"}}>React Interview Questions</h1>
       <div className="menu_style">
       <NavLink ClassName= "active_class" style={{fontSize:"25px"}} to="/">About</NavLink>
       <NavLink ClassName= "active_class" style={{fontSize:"25px"}} to="/day-1" >Day-1</NavLink>
        <NavLink ClassName= "active_class" style={{fontSize:"25px"}} to="/day-2" >Day-2</NavLink>
        <NavLink ClassName= "active_class" style={{fontSize:"25px"}} to="/day-3" >Day-3</NavLink>
        <NavLink ClassName= "active_class" style={{fontSize:"25px"}} to="/day-4" >Day-4</NavLink>
        <NavLink ClassName= "active_class" style={{fontSize:"25px"}} to="/day-5" >Day-5</NavLink>
        <NavLink ClassName= "active_class" style={{fontSize:"25px"}} to="/contact" >Contact</NavLink>
       </div>
      
        </>
    )
}
export default Navbar