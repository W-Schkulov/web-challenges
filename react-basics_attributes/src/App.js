import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Hello World once again...</h2>
      <label id="name">
        Hello
        <input htmlFor="name"></input>
        <a className="article__link" href="https://de.wikipedia.org/wiki/React">
          Wikipedia React
        </a>
      </label>
    </article>
  );
}
