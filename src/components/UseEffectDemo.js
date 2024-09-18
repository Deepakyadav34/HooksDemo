// import React, { useEffect, useState } from 'react';

import { useEffect, useState } from "react";

// // const UseEffectDemo = () => {
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     fetch('https://deepak.com/data') // Demo API like we can use any api if we want to fetch
// //       .then(response => response.json())
// //       .then(data => setData(data))
// //       .catch(error => console.error('Error fetching data:', error));
// //   }, []); //Here empty Depenendency Array will cause the one time rendering after its initiation

// //   return (
// //     <div>
// //       <h2>useEffect Demo</h2>
// //       <p>Data: {data ? JSON.stringify(data) : 'Loading...'}</p>
// //       {/**if there is any data in the Api then it will give the JSON.stringify(data) and if not it will givee Loadinggg..... */}
      
// //     </div>
// //   );
// // };

// export default UseEffectDemo;


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
  </div>
);

};

export default UseEffectDemo;