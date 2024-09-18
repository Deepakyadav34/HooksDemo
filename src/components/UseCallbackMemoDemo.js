import React, { useCallback, useMemo, useState } from 'react';

const ComputeExpensiveValue = ({ count }) => {
  const compute = (num) => {
    let result = 0;
    for (let i = 0; i < 1e6; i++) result += num;
    return result;
  };

  const result = useMemo(() => compute(count), [count]);

  return <p>Computed Value: {result}</p>;
};

const UseCallbackMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const increment = useCallback(() => setCount(c => c + 1), []);
  const toggleShow = useCallback(() => setShow(s => !s), []);

  return (
    <div>
      <h2>useCallback and useMemo Demo</h2>
      <button onClick={increment}>Increment Count</button>
      <button onClick={toggleShow}>{show ? 'Hide' : 'Show'} Computed Value</button>
      {show && <ComputeExpensiveValue count={count} />}
    </div>
  );
};

export default UseCallbackMemoDemo;