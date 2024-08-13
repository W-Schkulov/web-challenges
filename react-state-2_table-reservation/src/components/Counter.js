import React from "react";

export default function Counter({ onBrokolli, onCurrywurst }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onBrokolli}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onCurrywurst}
        >
          -
        </button>
      </div>
    </>
  );
}
