import React from "react";
import {Link} from 'react-router-dom'


const Card = ({ job }) => {
  return (
    <Link to  = {`/country/${job.cca3}`}>
    <section className="flex ">
    <div
      className="single-card w-64 h-[350px] flex flex-col items-start gap-3 rounded-md shadow-md mr-2 ml-2 mb-5"
    >
      <div className="flag-img m-0">
        <img
          src={job.flags.png}
          alt={`${job.altSpellings} Flag`}
          className="w-cover rounded w-64 h-[150px]"
        />
      </div>
      <div className="country-info ml-4">
        <div className="country-name text-xl font-bold mb-2 ">
          <h3>{job.name.common}</h3>
        </div>
        <div className="population text-sm">Region: {job.region}</div>
        <div className="region text-sm">Population:{job.population}</div>

        <div className="region text-sm">Capital:{job.capital}</div>
      </div>
    </div>
    </section>
    </Link>
  );
};

export default Card;
