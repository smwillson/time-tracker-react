import React, { useEffect, useState, useRef } from "react";
import { useTempUnitContext } from "../../context/temperature/TemperatureContext";
const TempItem = (props) => {
  const { tempUnit } = useTempUnitContext();
  const didMountRef = useRef(false);

  const {
    applicable_date,
    min_temp,
    max_temp,
    weather_state_abbr,
  } = props.dayForecast;

  const [max_temperature, setMaxTemp] = useState(max_temp.toFixed(2));
  const [min_temperature, setMinTemp] = useState(min_temp.toFixed(2));

  useEffect(() => {
    if (didMountRef.current) {
      setMaxTemp(convertTemp(max_temperature));
      setMinTemp(convertTemp(min_temperature));
    } else didMountRef.current = true;
  }, [tempUnit]);

  const convertTemp = (temperature) => {
    const { type } = tempUnit;
    let convertedTemp;

    if (type === "Celsius") {
      convertedTemp = (temperature - 32) / 1.8;
    } else {
      convertedTemp = temperature * 1.8 + 32;
    }
    return convertedTemp.toFixed(2);
  };

  const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ][dayOfWeek];
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s3'>
          <img
            src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
            style={{ height: "30%", width: "30%" }}
          ></img>
        </div>
        <div className='col s3'>{getDayOfWeek(applicable_date)}</div>
        <div className='col s3'>
          <i className='fas fa-temperature-low'> {min_temperature}&deg;</i>
        </div>
        <div className='col s3'>
          <i className='fas fa-temperature-high'> {max_temperature}&deg;</i>
        </div>
      </div>
    </div>
  );
};

export default TempItem;
