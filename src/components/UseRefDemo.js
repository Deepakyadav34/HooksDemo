import { useEffect, useRef, useState } from "react";


const UseRefDemo = () => {
    const [state,setState]=useState("Deepak");

    const count=useRef(0);

   useEffect(()=>{
    count.current=count.current+1;
   },[state]
  )
  return <div>
    <h2>Hello {state}</h2>
    <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} ></input>
    <h2>Render Count: {count.current}</h2>
  
  </div>;
};

export default UseRefDemo;
