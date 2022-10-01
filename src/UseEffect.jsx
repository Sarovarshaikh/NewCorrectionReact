import React, {useEffect, useState} from "react";

const UseEffect  = () =>{
 const [num, setNum] = useState(0)
 const [nums, setNums] = useState(0)
 useEffect(() =>{
    alert("OKay num-1 updated")
 },[num])
 useEffect(() =>{
    alert("OKay num-2 updated")
 },[nums])
    return(
        <>
            <button onClick={() =>{setNum(num + 1)}
         
         }>Click Me {num}</button>
         <br/>
         <button onClick={() =>{setNums(nums + 1)}
         
        }>Click Me {nums}</button>
        </>
    )
}
export default UseEffect