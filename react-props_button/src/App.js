import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <>
      <Button color="blue" text="Click Me" onClick={handleClick} />
      <Button color="green" disabled text="Click Me" onClick={handleClick} />

      <Button color="red" text="Click Me" onClick={handleClick} />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ height: 50, width: 100, backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
