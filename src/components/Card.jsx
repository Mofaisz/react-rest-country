import React from "react";
import {Link} from 'react-router-dom'


const Card = ({ country }) => {
  return (
    <Link to  = {`/country/${country.cca3}`}>
    <section className="flex ">
    <div
      className="single-card w-64 h-[350px] flex flex-col items-start gap-3 rounded-md shadow-md mr-2 ml-2 mb-5"
    >
      <div className="flag-img m-0">
        <img
          src={country.flags.png}
          alt={`${country.altSpellings} Flag`}
          className="w-cover rounded w-64 h-[150px]"
        />
      </div>
      <div className="country-info ml-4">
        <div className="country-name text-xl font-bold mb-2 ">
          <h3>{country.name.common}</h3>
        </div>
        <div className="population text-sm">Region: {country.region}</div>
        <div className="region text-sm">Population:{country.population}</div>

        <div className="region text-sm">Capital:{country.capital}</div>
      </div>
    </div>
    </section>
    </Link>
  );
};

export default Card;
