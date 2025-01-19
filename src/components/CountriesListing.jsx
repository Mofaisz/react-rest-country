import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header"

const CountriesListing = () => {

  const [jobs, setJobs] = useState([]);
  //for search
  const [search, setSearch] = useState("");
  //for region
  const [searchRegion, setRegion] = useState("");
  //for sort
  const [sortPopulation,setSortPopulation] = useState("")

  

  // Fetch countries data
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data)
        setJobs(data);
      } catch (error) {
        console.error(`Error in fetching data:`, error.message);
      }
    };

    fetchJobs();
  }, []);

  // Filtered jobs based on search input
  const handleSort = (event) =>{
    setSortPopulation(event.target.value)
  }

  const filteredJobs = jobs.filter((job) => {
    return (
      job.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (searchRegion === "" || job.region.toLowerCase() === searchRegion.toLowerCase())
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
        handleInput = {(e) => setSearch(e.target.value)}
        handleRegion = {(e) => setRegion(e.target.value)}
        handleSort={handleSort}
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
