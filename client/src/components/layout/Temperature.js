import React, { useState, useEffect, Fragment } from "react";
import TempItem from "../temperature/TempItem";

const Temperature = () => {
  const [temp, setTemp] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentTemperature();
    //eslint-disable-next-line
  }, []);

  const getCurrentTemperature = async () => {
    try {
      setLoading(true);
      const result = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2486982/`
      );
      const data = await result.json();
      const current = data.consolidated_weather[0].the_temp;
      //console.log(data.consolidated_weather);
      //const weatherData = data.consolidated_weather;
      setTemp(current);
      setLoading(false);
    } catch (error) {
      console.error("Unable to retrieve current weather.");
    }

    if (loading) {
      return <h4>Loading...</h4>;
    }
  };

  return (
    <div>
      {!loading && temp !== null ? (
        <div>
          <a href='#temp-modal' className='modal-trigger modal-close'>
            {temp}
            <i className='fas fa-thermometer-half'></i>
          </a>
        </div>
      ) : (
        <i className='fas fa-exclamation-circle'></i>
      )}
    </div>
  );
};

export default Temperature;
