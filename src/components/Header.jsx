import React from "react";
import { FaMoon, FaSearch } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";
import {useLocation} from 'react-router-dom' 

const Header = ({ handleInput,handleRegion,handleSort }) => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location  = useLocation();
  const isDetailUrl = location.pathname.startsWith('/country/')

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <header
        className={`flex justify-between items-center h-20 w-full shadow-md font-sans px-4`}
      >
        <div className="heading ml-3">
          <h3 className="text-lg sm:text-xl md-2xl lg-3xl font-bold">
            Where in the world?
          </h3>
        </div>
        <div className="dark-mode-button mr-3">
          <button
            id="dark-mode"
            className="flex bg-transparent text-base cursor-pointer border-none transition duration-300 hover:bg-gray-200 hover:text-gray-800"
            onClick={toggleDarkMode}
          >
            <FaMoon className="mr-2 mt-0.5" /> Dark Mode
          </button>
        </div>
      </header>






     
    {!isDetailUrl &&(
   
      <section className="search-and-region flex justify-between items-center h-28 relative ml-5 mr-5">
        <div className="absolute l-2 relative search">
          <div className="search-bar absolute">
          <FaSearch className="absolute bg-transparent mt-3 ml-2 text-gray-400 text-base" />

          </div>
          <input
            type="search"
            onChange={handleInput}
            id="search"
            placeholder="         Search for a country"
            className={`w-100 h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          />
        </div>
        {/* <div className="subregion"></div> */}
          
        <div className="sort-ascending">
          <select
          placeholder = "sort-by-population"
          onChange={handleSort}
          className={`w-100 h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
          >
            <option value= "">Sort by</option>
            <option value = "asc">Population:Low-to-high</option>
            <option value= "dsc">Population:High-to-low</option>
          </select>
        </div>


        <div className="filter-region">
        <input
          type="text"
          placeholder="Filter by region"
          id="region"
          list="regions"
          onChange = {handleRegion}
          className={`h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-#1a202c'} `} />
         
        <datalist id="regions">
          <option value="Africa"></option>
          <option value="Americas"></option>
          <option value="Asia"></option>
          <option value="Europe"></option>
        </datalist>
      </div>
      </section>
    )}

    </div>
  );
};

export default Header;
