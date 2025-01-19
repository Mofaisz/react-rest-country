import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Header from "./Header";

const CountryDetailPage = () => {
  const { id } = useParams(); // Get the country ID from the URL
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);


  useEffect(() => {
    // Fetch country details based on the id
    const fetchCountryDetails = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
      const data = await res.json();
      setCountry(data[0]); // Set the fetched country data to state


      if(data[0]?.borders?.length>0){
        const borderCodes = data[0].borders.join(",")
        const borderDetails = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes}`)
        const borderData = await borderDetails.json()
        setBorderCountries(borderData)
      }else{
        setBorderCountries([])
      }
    };

    fetchCountryDetails();
  }, [id]); // Refetch whenever the country ID changes

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Link to={"/"}>
      <div className=" bg-slate-100 p-8 pb-0 dark:bg-slate-700 flex justify-start w-full min-w-screen">
        <button
          className="mx-[10%] px-6 border border-black bg-white dark:bg-inherit shadow-lg dark:border-white dark:text-white"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      </Link>
      <div className="bg-slate-100 dark:bg-slate-700 dark:text-white justify-center items-center flex flex-col md:flex-row md:justify-center gap-20 min-h-[100vh] md:min-h-[33rem] px-[8%]">

        <div className="flex justify-center items-center h-auto w-[80%] mt-4">
          <img
            className="shadow-lg dark:shadow-slate-900"
            src={country.flags.png}
            alt={`${country.name.common}'s flag`}
          />
        </div>

        <div className="detail  text-left  w-full">
          <div className="heading text-4xl  font-bold">
            <h2> {country.name.common} </h2>
          </div>

        <div className="detail flex gap-10 py-4">
            <div className="flex flex-col gap-1">
            <p className="text-sm">
                <span className="font-medium ">Native Name: </span>{" "}
                {
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].official
                }
                </p>

                <p className="text-sm">
                <span className="font-medium">Population: </span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p className="text-sm">
                <span className="font-bold">Region: </span>
                {country.region}
              </p>
              <p className="text-sm">
                <span className="font-bold">Sub-Region: </span>
                {country.region || "N/A"}
              </p>
              <p className="text-sm">
                <span className="font-bold">Capital: </span>
                {Array.isArray(country.capital)
                  ? country.capital.join(", ")
                  : country.capital}
              </p>
              <div className="flex flex-col gap-1">
              <p className="text-sm">
                <span className="font-bold">Top Level Domain: </span>{" "}
                {Array.isArray(country.tld)
                  ? country.tld.join(", ")
                  : country.tld}
              </p>
              <p className="text-sm">
                <span className="font-bold">Currency: </span>{" "}
                {Object.keys(country.currencies || {}).length
                  ? country.currencies[Object.keys(country.currencies)[0]].name
                  : "N/A"}
              </p>
              <p className="text-sm">
                <span className="font-bold">Languages: </span>
                {Object.values(country.languages || {})
                  .sort()
                  .join(", ") || "Not available."}
              </p>
              </div>
            </div>

            </div>
            <div className="p-4 pl-0 font-bold">
            <p>Border Countries:{country.border}</p>  
            <div className="flex flex-wrap gap-2 mt-2">
              {borderCountries.length > 0 ? (
                borderCountries.map((borderCountry) => (
                  <Link
                    to={`/country/${borderCountry.cca3}`}
                    key={borderCountry.cca3}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded-md shadow-md hover:bg-gray-400 dark:hover:bg-gray-500"
                  >
                    {borderCountry.name.common}
                  </Link>
                ))
              ) : (
                <p>No Border Countries</p>
              )}
            </div>             
          </div>

        </div>

        {/* Add more country details as needed */}
      </div>
    </>
  );
};

export default CountryDetailPage;
