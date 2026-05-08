import { useState, useEffect } from "react";

function Counter() {

  // get saved value
  const saved = localStorage.getItem("count");

  // state
  const [count, setCount] = useState(
    saved ? Number(saved) : 0
  );

  // save value
  useEffect(() => {

    localStorage.setItem("count", count);

  }, [count]);

  return (

    <div>

      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

      <button
        onClick={() => setCount(count - 1)}
      >
        -
      </button>

      <button
        onClick={() => setCount(0)}
      >
        Reset
      </button>

    </div>
  );
}

export default Counter;