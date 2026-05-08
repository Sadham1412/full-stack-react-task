import { useReducer } from "react";

function Counters() {

  function reducer(count, action) {

    if (action === "increase") {
      return count + 1;
    }
    else if(action==="decrease"){
        return count-1;
    }
    else if(action==="reset"){
        return count=0;
    }

    return count;
  }


  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>counter app</h1>

      <h1>{count}</h1>

      <button className="btn1"
        onClick={() => dispatch("increase")}
      >
        Increase
      </button>
      <button className='btn2'onClick={()=> dispatch("decrease")}>
        decrease
      </button>
      <button className='btn3'onClick={()=> dispatch("reset")}>
        reset
      </button>

    </div>
  );
}

export default Counters;