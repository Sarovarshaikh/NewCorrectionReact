import React, { useState } from "react";
// let count = 1


const UseState = () => {

    const [count,setCount] = useState(0) // useState always written in functional componet
    
    const IncNum = () =>{
        setCount(count + 1) 
    }
  return (
    <>
      <ul>
        <li>
          The React useState Hook allows us to track state in a function
          component.State generally refers to data or properties that need to be
          tracking in an application.
        </li>
        
      </ul>
      <div className="use_button">
        <h1 className="count_num">{count}</h1>
        <button className="useButton" onClick={IncNum}>Click Me</button>
      </div>
    </>
  );
};
export default UseState;
