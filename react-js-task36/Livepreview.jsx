import { useState } from "react";

function LivePreview() {

  const [text, setText] = useState("");

  return (
    <div>

      <h2>Live Text Preview</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Preview:</h3>

      <p>{text}</p>

    </div>
  );
}

export default LivePreview;