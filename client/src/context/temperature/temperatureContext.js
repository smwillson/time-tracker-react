import React, { useState, createContext } from "react";

export const TemperatureContext = createContext();
export const ForecastContext = createContext();

const TemperatureContextProvider = (props) => {
  const [temperature, setTemperature] = useState(null);
  const [forecast, setForecast] = useState(null);

  return (
    <TemperatureContext.Provider value={{ temperature, setTemperature }}>
      <ForecastContext.Provider value={{ forecast, setForecast }}>
        {props.children}
      </ForecastContext.Provider>
    </TemperatureContext.Provider>
  );
};

export default TemperatureContextProvider;
