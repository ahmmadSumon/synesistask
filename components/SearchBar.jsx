"use client";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Initialize with an empty string

  return (
    <div className="flex items-center w-[400px] md:w-[554px] h-[83px] rounded-[10px] bg-[#F0F1F5] shadow-lg px-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-full text-lg text-black bg-transparent border-none outline-none"
        value={searchTerm} // Controlled input with state
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
      />
      <button
        type="button"
        className="text-black p-2"
        onClick={() => onSearch(searchTerm)} // Trigger search with current value
      >
        <FiSearch size={24} />
      </button>
    </div>
  );
};

export default SearchBar;
