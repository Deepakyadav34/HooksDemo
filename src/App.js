import React from 'react';
import UseCallbackMemoDemo from './components/UseCallbackMemoDemo';
import UseRefDemo from './components/UseRefDemo';
// import UseContextDemo from './components/UseContextDemo';
// import UseEffectDemo from './components/UseEffectDemo';
// import UseReducerDemo from './components/UseReducerDemo';
// import UseStateDemo from './components/UseStateDemo';
const App = () => (
  <div className="App">
    <h1>React Hooks Demo</h1>
    <UseRefDemo/>
    {/* <UseStateDemo /> */}
    {/*<UseEffectDemo />
    /*<UseContextDemo />
    <UseReducerDemo />*/
    <UseCallbackMemoDemo /> }
  </div>
);
export default App;