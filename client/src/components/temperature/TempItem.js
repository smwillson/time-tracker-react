import React from "react";

const TempItem = (props) => {
  const {
    applicable_date,
    min_temp,
    max_temp,
    weather_state_name,
  } = props.dayForecast;
  const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][dayOfWeek];
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s3'>{getDayOfWeek(applicable_date)}</div>
        <div className='col s3'>
          <i className='fas fa-temperature-low'> {min_temp.toFixed(2)}</i>
        </div>
        <div className='col s3'>
          <i className='fas fa-temperature-high'> {max_temp.toFixed(2)}</i>
        </div>
        <div className='col s3'>{weather_state_name} </div>
      </div>
    </div>
  );
};

export default TempItem;
