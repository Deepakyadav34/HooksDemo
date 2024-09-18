import React, { useCallback, useState } from 'react';

const ChildComponent= React.memo(({ onClick }) => {
  console.log('Child component rendered');
  return <button onClick={onClick}>Click me!</button>;
});

const UseCallbackMemoDemo=()=>{
const [count,setCount]=useState(0);

const handleClick=useCallback(()=>{
  setCount((prevcount)=> prevcount+1);
},[]);

return(
  <div>
    <h1>Count:{count}</h1>
    <ChildComponent onClick={handleClick}></ChildComponent>
  </div>
)
}
export default UseCallbackMemoDemo;