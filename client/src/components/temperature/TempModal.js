import React from "react";
import TempItem from "./TempItem";
import TemperatureUnitForm from "./TemperatureUnitForm";

import { useForecastContext } from "../../context/temperature/TemperatureContext";
const TempModal = () => {
  const { forecast } = useForecastContext();
  return (
    <div id='temp-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <strong>6 day weather</strong>
        <div>
          {forecast !== null &&
            forecast.map((dayForecast) => (
              <TempItem key={dayForecast.id} dayForecast={dayForecast} />
            ))}
        </div>
        <TemperatureUnitForm />
      </div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect'></a>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};

export default TempModal;
