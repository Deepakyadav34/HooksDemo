import React, { useState } from 'react';

const UseStateDemo =() =>{
  const [count,setCount]=useState(0);
  const name="Deepak";
  return(
<div>
  <h2>Use State Demo</h2>
  <h2>{name}</h2>
<h4>Count:{count}</h4>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
<hr></hr>
<hr>
</hr>
</div>
  );
};

export default UseStateDemo;