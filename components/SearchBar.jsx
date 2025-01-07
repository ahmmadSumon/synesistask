"use client";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center w-[400px] md:w-[554px] h-[93px] rounded-[10px] bg-[#F0F1F5] shadow-lg px-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-full text-lg text-black bg-transparent border-none outline-none"
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button
        type="button"
        className="text-black p-2"
        onClick={() => onSearch(searchTerm)} 
      >
        <FiSearch size={24} />
      </button>
    </div>
  );
};

export default SearchBar;
