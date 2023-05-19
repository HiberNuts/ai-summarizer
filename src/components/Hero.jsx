import React from "react";
import { logo } from "../assets";
import "../App.css";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <button
          type="button"
          onClick={() => window.open("https://github.com/HiberNuts", "_blank")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        OpenAI GPT-3
      </h1>
    </header>
  );
};

export default Hero;
