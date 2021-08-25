import React, { useState } from "react";
import scrapeService from "../services/scrapeService";
import DataCard from "./DataCard";
import Spinner from "./Spinner";

const Scrape = () => {
  const initialScrapeState = {
    link: "",
    image: "",
    name: "",
    desc: "",
    connections: "",
    about: "",
    exp: [],
    topSkills: [],
  };
  const initialFormState = {
    link: "",
    username: "",
    password: "",
  };

  const [scrapeData, setScrapeData] = useState(initialScrapeState);
  const [formState, setFormState] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const scrape = (event) => {
    event.preventDefault();
    setError(false);
    var data = {
      link: formState.link,
      username: formState.username,
      password: formState.password,
    };

    setLoading(true);

    scrapeService
      .createOrUpdate(data)
      .then((res) => {
        setScrapeData({
          link: data.link,
          image: res.data.scraped.image,
          name: res.data.scraped.name,
          desc: res.data.scraped.desc,
          connections: res.data.scraped.connections,
          about: res.data.scraped.about,
          exp: res.data.scraped.exp,
          topSkills: res.data.scraped.topSkills,
        });
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };

  return (
    <div>
      <form className='submit-form' onSubmit={scrape}>
        <div>
          <div className='form-group'>
            <label htmlFor='link'>Link</label>
            <input
              type='text'
              className='form-control'
              id='link'
              required
              value={formState.link}
              onChange={handleInputChange}
              name='link'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='username'>LinkedIn Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              required
              value={formState.username}
              onChange={handleInputChange}
              name='username'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>LinkedIn Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              required
              value={formState.password}
              onChange={handleInputChange}
              name='password'
            />
          </div>
          <div>
            <button
              type='submit'
              className='btn btn-success mt-5 mx-auto col-1 d-grid'>
              Scrape
            </button>
          </div>
        </div>
      </form>

      <div>
        {loading ? <Spinner /> : <div></div>}

        {submitted ? <DataCard scrapeData={scrapeData} /> : <div></div>}

        {error ? (
          <div className='mt-5 text-center'>
            <h4>Error has occured</h4>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Scrape;
