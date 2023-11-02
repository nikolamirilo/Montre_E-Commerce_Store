"use client";
import React, { useState } from "react";
import Filters from "./Filters";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <form className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col gap-5 md:flex-row items-center justify-center">
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Pretraži satove"
            className="w-full md:w-80 px-3 h-10 rounded-lg border-2 border-amber-500 focus:outline-none "
          />
          <button
            type="submit"
            className="bg-amber-500 text-white rounded-lg relative right-3 px-2 md:px-3 py-0 md:py-1  hover:bg-amber-500"
          >
            Search
          </button>
        </div>

        <button
          className="bg-white w-fit text-amber-500 rounded-lg relative border-2 border-amber-500 hover:bg-amber-500 hover:text-white px-2 md:px-3 py-1 md:py-1"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "Isključi filtere" : "Uključi filtere"}
        </button>
      </div>
      {isOpen ? <Filters /> : null}
    </form>
  );
};

export default Search;
