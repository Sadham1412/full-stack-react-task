import { useRef } from "react";

function FocusInput() {

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (

    <div className="container">

      <input
        type="text"
        ref={inputRef}
        placeholder="Type here"
        className="input-box"
      />

      <button
        onClick={focusInput}
        className="focus-btn"
      >
        Focus
      </button>

    </div>
  );
}

export default FocusInput;