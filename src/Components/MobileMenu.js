import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ({ showMenu, toggleMenu }) {
  return (
    <>
      <button className="btn">
        <a
          href="https://trendupp.com/signup"
          className="a-link"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Sign up
        </a>
      </button>
      <button className="btn">
        <a
          href="https://trendupp.com/signup"
          className="a-link"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Login
        </a>
      </button>
      <button className="btn">Download App</button>
    </>
  );
}
