import React, { useEffect } from "react";

import { useTemperatureContext } from "../../context/temperature/TemperatureContext";
import { useForecastContext } from "../../context/temperature/TemperatureContext";
import { useTempUnitContext } from "../../context/temperature/TemperatureContext";

const Temperature = (props) => {
  const { setTemperature, temperature } = useTemperatureContext();
  const { setForecast } = useForecastContext();
  const { tempUnit } = useTempUnitContext();

  useEffect(() => {
    getCurrentTemperature();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const { type } = tempUnit;
    // console.log(temperature);
    // console.log(type);
    if (temperature !== null) setTemperature(convertTemp(type));
  }, [tempUnit]);

  const convertTemp = (unit) => {
    let convertedTemp = 0;
    if (unit === "Celsius") {
      convertedTemp = (temperature - 32) / 1.8;
    } else {
      convertedTemp = temperature * 1.8 + 32;
    }
    return convertedTemp.toFixed(2);
  };

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
      //console.log(`type of currentemp ${typeof currentTemp}`);
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
      {temperature !== null && (
        <a href='#temp-modal' className='modal-trigger modal-close'>
          <i className='fas fa-thermometer-half'></i> {temperature}&deg;
        </a>
      )}
    </div>
  );
};

export default Temperature;
