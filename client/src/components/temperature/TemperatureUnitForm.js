import React, { useContext } from "react";

import { useTempUnitContext } from "../../context/temperature/TemperatureContext";

const TemperatureUnitForm = () => {
  const { tempUnit, setTempUnit } = useTempUnitContext();
  const { type } = tempUnit;
  const onChange = (event) => {
    setTempUnit({
      type: event.target.value,
    });
    //console.log(tempUnit);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <span>Units:</span>
      <p>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            value='Celsius'
            checked={type === "Celsius"}
            onChange={onChange}
          />
          <span>Celsius</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            value='Fahrenheit'
            checked={type === "Fahrenheit"}
            onChange={onChange}
          />
          <span>Fahrenheit</span>
        </label>
      </p>
    </form>
  );
};

export default TemperatureUnitForm;
