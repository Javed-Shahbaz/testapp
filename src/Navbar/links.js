import React from "react";
import "./links.css";
export const Links = (props) => {
  return (
    <nav>
      <a href="Home">Home</a>
      <a href="contact">Contact</a>
      <a href="apps">{props.name}</a>
    </nav>
  );
};
