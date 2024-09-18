import { useReducer } from "react";
const reducer=(state,action)=>{
  switch(action.type){
    case 'increment':
      return {count:state.count+5};
    
    case 'decrement':
      return {count:state.count-5};

    default:
      return state;
  }
};

const UseReducerDemo =()=>{
  const[state,dispatch]=useReducer(reducer,{count:0});



  return(
    <div>
      <h2>Use Reducer Demo</h2>
      <p>Count:{state.count}</p>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    </div>
  )
};
export default UseReducerDemo;