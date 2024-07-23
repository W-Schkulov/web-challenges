import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  const handleClick = (event) => {
    setCode((prevCode) => prevCode + event.target.textContent);
  };

  const resetCode = () => {
    setCode("");
  };

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
      </div>

      <button type="button" onClick={resetCode}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
