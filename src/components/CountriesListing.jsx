import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";

const CountriesListing = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [searchRegion, setRegion] = useState("");
  const [sortPopulation, setSortPopulation] = useState("");
  const [subregion, setSubregion] = useState("");
  const [subregions, setSubregions] = useState([]);
  const [regions, setRegions] = useState([]);

  // Fetch countries data
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setJobs(data);

        // Extract regions from the fetched data
        const uniqueRegions = Array.from(new Set(data.map((country) => country.region)));
        setRegions(uniqueRegions);
      } catch (error) {
        console.error(`Error in fetching data:`, error.message);
      }
    };

    fetchJobs();
  }, []);

  // Handle sorting by population
  const handleSort = (event) => {
    setSortPopulation(event.target.value);
  };

  // Handle region selection and filter subregions
  const handleRegion = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);

    // Filter subregions based on selected region
    if (selectedRegion) {
      const regionSubregions = jobs
        .filter((country) => country.region === selectedRegion)
        .map((country) => country.subregion);
      const uniqueSubregions = Array.from(new Set(regionSubregions));
      setSubregions(uniqueSubregions);
    } else {
      setSubregions([]);
    }
  };

  // Handle subregion selection
  const handleSubregion = (event) => {
    setSubregion(event.target.value);
  };

  // Filtered jobs based on search input, region, and subregion
  const filteredJobs = jobs
    .filter((job) => {
      return (
        job.name.common.toLowerCase().includes(search.toLowerCase()) &&
        (searchRegion === "" || job.region.toLowerCase() === searchRegion.toLowerCase()) &&
        (subregion === "" || job.subregion.toLowerCase() === subregion.toLowerCase())
      );
    })
    .sort((a, b) => {
      switch (sortPopulation) {
        case "asc":
          return a.population - b.population;
        case "dsc":
          return b.population - a.population;
        default:
          return 0;
      }
    });

  return (
    <>
      <Header
        handleInput={(e) => setSearch(e.target.value)}
        handleRegion={handleRegion}
        handleSort={handleSort}
        handleSubregion={handleSubregion}
        regions={regions}  // Pass regions to Header
        subregions={subregions}  // Pass subregions to Header
      />
      <div className="flex flex-wrap gap-1 justify-center">
        {filteredJobs.map((job, index) => (
          <Card key={index} job={job} />
        ))}
      </div>
    </>
  );
};

export default CountriesListing;
