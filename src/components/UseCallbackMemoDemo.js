import React, { useCallback, useState } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child Component Rendered");
  return <button onClick={onClick}>Click Me!</button>;
});

const UseCallbackMemoDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Use Callback Demo </h2>
      <p>Count:{count}</p>
      <ChildComponent onClick={handleClick}></ChildComponent>
    </div>
  );
};
export default UseCallbackMemoDemo;
