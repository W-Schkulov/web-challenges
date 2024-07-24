import React from "react";
import "./Tag.css";

export default function Tag({ tag }) {
  const tagClassName = tag === "admin" ? "tag tag--highlight" : "tag";
  return <li className={tagClassName}>{tag}</li>;
}
