import React, { useState, useEffect, useContext, Fragment } from "react";
import TempItem from "./TempItem";
import TempModal from "./TempModal";

import { TemperatureContext } from "../../context/temperature/TemperatureContext";
import { ForecastContext } from "../../context/temperature/TemperatureContext";

const Temperature = (props) => {
  const { setTemperature, temperature } = useContext(TemperatureContext);
  const { setForecast } = useContext(ForecastContext);

  useEffect(() => {
    getCurrentTemperature();
    //eslint-disable-next-line
  }, []);

  const getCurrentTemperature = async () => {
    try {
      // setLoading(true);
      const result = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2486982/`
      );
      const data = await result.json();
      const forecast = data.consolidated_weather;
      const currentTemp = data.consolidated_weather[0].the_temp;

      //set all the component state
      setTemperature(currentTemp);
      setForecast(forecast);
      // setLoading(false);
      return currentTemp;
    } catch (error) {
      console.error("Unable to retrieve current weather.");
    }

    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }
  };

  return (
    <div>
      <a href='#temp-modal' className='modal-trigger modal-close'>
        {temperature}
        <i className='fas fa-thermometer-half'></i>
      </a>
    </div>
  );
};

export default Temperature;
