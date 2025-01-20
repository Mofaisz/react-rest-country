import React from "react";
import { FaMoon, FaSearch } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";
import { useLocation } from "react-router-dom";

const Header = ({
  handleInput,
  handleRegion,
  handleSort,
  handleSubregion,
  regions = [],
  subregions = [],
}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const isDetailUrl = location.pathname.startsWith("/country/");

  return (
    <div className=   {`${isDarkMode ? "dark" : ""} `}    >
      <header className="flex justify-between items-center h-20 w-full shadow-md font-sans px-4">
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

      {!isDetailUrl && (
        <div className="search-and-region flex justify-center">

        <section className="search-and-region flex flex-col md:flex-row justify-between w-[80%] items-center h-28 relative ml-5 mr-5">
          {/* Search Input */}
          <div className="relative search">
            <FaSearch className="absolute bg-transparent mt-3 ml-2 text-gray-400 text-base" />
            <input
              type="search"
              onChange={handleInput}
              id="search"
              placeholder="Search for a country"
              className={`w-40 h-10 px-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            />
          </div>

          {/* Sort by Population */}
          {/* <div className="sort-ascending">
            <select
              onChange={handleSort}
              className={`w-100 h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            >
              <option value="">Sort by</option>
              <option value="asc">Population: Low to High</option>
              <option value="dsc">Population: High to Low</option>
            </select>
          </div> */}

          {/* Filter by Region */}
          <div className="filter-region">
            <select
              
              onChange={handleRegion}
              className={`w-100 h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            >
              <option value = "">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              </select>
          </div>

          {/* Filter by Subregion */}
          {/* <div className="filter-subregion">
            <select
              onChange={handleSubregion}
              className={`h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
              disabled={!subregions.length}
            >
              <option value="">Select Subregion</option>
              {subregions.map((subregion) => (
                <option key={subregion} value={subregion}>
                  {subregion}
                </option>
              ))}
            </select>
          </div> */}
        </section>
        </div>
      )}
    </div>
  );
};

export default Header;
