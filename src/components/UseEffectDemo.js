import { useEffect, useState } from "react";


const UseEffectDemo=()=>{
const [data,setData]=useState(null);
const names="Deepak";
useEffect(()=>{
  fetch('https://deepak.com')//we can use any api 
  .then(response=>response.json())
  .then(data=>setData(data))
  .catch(error =>console.log("Error ..................",error));

},[]);// This empty dependency is to make sure that this useEffect will not run after every render so this will make the useEffect to run only once after the initial render.

return(
  <div>
    <h2>Hiiii {names} !!!!!!!!!!!!!!!</h2>
    <h3>UseEffect Demoooo</h3>
    <p>Data:{data?JSON.stringify(data):"Loading..........."}</p>
    <hr/>
    <hr/>
  </div>
);

};

export default UseEffectDemo;