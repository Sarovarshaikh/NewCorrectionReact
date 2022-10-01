import React,{useReducer,useState} from "react";

let initialize =0;
const reducer = (state, action) =>{
    if(action.type === "Increment"){
      return state +1
      console.log(state +1 +"sdshd");  
    }

    if(action.type === "Decreament"){
        return state -1
    }
    console.log(state,action);
    return state

}


const UseReducer = () =>{
    // const [num, setNum] = useState(0)

   const[state, dispatch] = useReducer(reducer, initialize)
    return(
        <>
        <div className="useReduce">
        <p>{state}</p>
    <button onClick={()=> dispatch({type:"Increment"})}>Inc</button>
    <button onClick={()=>dispatch({type:"Decreament"})}>Dec</button>
        </div>
    
        </>
    )
}
export default UseReducer;