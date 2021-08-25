import React from "react";

/**
 * Component that takes scraped data and displayes it
 * @param param0 Data retrived from api that containes scraped data for one user
 * @returns Scraped data styled in card
 */
const DataCard = ({ scrapeData }) => {
  return (
    <div className='card w-100 mt-5'>
      <img
        src={scrapeData.image}
        className='card-image-top mx-auto rounded-circle mt-2'
        alt='profile'
        style={{ width: "200px", height: "200px" }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{scrapeData.name}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{scrapeData.desc}</h6>
        <p className='card-text'>{scrapeData.connections}</p>
        <p className='card-text'>{scrapeData.about}</p>
        <p className='card-text'>Experience</p>
        <ul className='list-group list-group-flush'>
          {scrapeData.exp &&
            scrapeData.exp.map((data, index) => {
              return (
                <li className='list-group-item' key={index}>
                  <div>
                    <span>
                      {data.title} - {data.company} -
                    </span>
                    <span className='ms-2'>
                      <img
                        src={data.image}
                        className='card-image-top mx-auto rounded-circle'
                        alt='company'
                        style={{ width: "20px", height: "20px" }}
                      />
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
        <p className='card-text'>Skills</p>
        <ul className='list-group list-group-flush'>
          {scrapeData.topSkills &&
            scrapeData.topSkills.map((data, index) => {
              return (
                <li className='list-group-item' key={index}>
                  {data.skill}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default DataCard;
