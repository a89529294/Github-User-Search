import React, { useState } from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

function Header({ isDark, setIsDark }) {
  return (
    <header className="flex justify-between">
      <h1 className="text-2xl font-bold leading-10 text-dark-black dark:text-white">
        devfinder
      </h1>
      <button
        className="flex items-center text-sm font-bold leading-5 tracking-widest text-dark-blue dark:text-white"
        onClick={() => {
          const value = localStorage.getItem("theme");
          localStorage.setItem("theme", value === "light" ? "dark" : "light");
          if (value === "light") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
          setIsDark(value === "light");
        }}
      >
        {isDark ? (
          <>
            LIGHT <img src={sun} alt="sun" className="ml-4" />
          </>
        ) : (
          <>
            DARK <img src={moon} alt="moon" className="ml-4" />
          </>
        )}
      </button>
    </header>
  );
}

export default Header;
