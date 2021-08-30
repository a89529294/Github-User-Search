import React, { useState } from "react";
import magnifyingGlass from "../assets/icon-search.svg";

function Searchbar({ setSearchTerm, searchStatus, setSearchStatus }) {
  const [search, setSearch] = useState("");

  return (
    <form
      className="relative flex items-center justify-around py-2 bg-white shadow-3xl rounded-2xl mt-9 dark:bg-fainting-light"
      onSubmit={(e) => {
        e.preventDefault();
        if (!search.trim()) return;
        setSearchTerm(search);
      }}
    >
      <img src={magnifyingGlass} alt="magnifying glass" className="w-5 h-5 " />
      <input
        type="text"
        className="w-6/12 text-sm font-normal leading-6 outline-none placeholder-dark-blue dark:bg-fainting-light dark:text-white dark:placeholder-white sm:text-lg lg:w-8/12"
        placeholder="Search username..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setSearchStatus("idle");
        }}
      />
      {searchStatus === "error" && (
        <span className="absolute right-24 text-[#f74646] text-sm">
          No results
        </span>
      )}
      <button className="px-4 py-3 text-sm font-bold leading-5 text-white bg-light-blue rounded-xl hover:bg-hover-blue sm:text-base sm:leading-6 sm:px-6">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
