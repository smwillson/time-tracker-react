import React, { useState, createContext } from "react";

export const TemperatureContext = createContext();
export const ForecastContext = createContext();
export const TempUnitContext = createContext();

const TemperatureContextProvider = (props) => {
  const [temperature, setTemperature] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [tempUnit, setTempUnit] = useState({
    type: "Celsius",
  });

  return (
    <TemperatureContext.Provider value={{ temperature, setTemperature }}>
      <ForecastContext.Provider value={{ forecast, setForecast }}>
        <TempUnitContext.Provider value={{ tempUnit, setTempUnit }}>
          {props.children}
        </TempUnitContext.Provider>
      </ForecastContext.Provider>
    </TemperatureContext.Provider>
  );
};

export default TemperatureContextProvider;
