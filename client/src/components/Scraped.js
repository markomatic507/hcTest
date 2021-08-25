import React, { useEffect, useState } from "react";
import scrapeService from "../services/scrapeService";
import DataCard from "./DataCard";

/**
 * Component that displays scraped data retrived from api
 * @returns html for scraped display
 */
const Scraped = () => {
  const [scraped, setScraped] = useState();
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    retriveScraped();
  }, []);

  const onChangeSearh = (event) => {
    setSearch(event.target.value);
  };

  const retriveScraped = () => {
    setError(false);
    scrapeService
      .getAll()
      .then((res) => {
        setScraped(res.data.scraped);
        console.log(res.data.scraped);
      })
      .catch(() => setError(true));
  };

  const find = () => {
    setError(false);
    scrapeService
      .getByName(search)
      .then((res) => {
        setScraped(res.data.scraped);
        console.log(res.data.scraped);
      })
      .catch(() => setError(true));
  };

  return (
    <div className='container'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          id='search'
          required
          value={search}
          onChange={onChangeSearh}
          name='search'
        />
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={find}>
          Search
        </button>
      </div>
      <div class='mt-5 row row-cols-1 row-cols-md-2 g-4'>
        {scraped &&
          scraped.map((scrapeData) => <DataCard scrapeData={scrapeData} />)}
      </div>

      {error ? (
        <div className='mt-5 text-center'>
          <h4>Error has occured</h4>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Scraped;
