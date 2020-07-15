import React, { useState, createContext, useContext } from "react";

const TemperatureContext = createContext();
const ForecastContext = createContext();
const TempUnitContext = createContext();

/* eslint-disable */

//make sure that useContext should only be called inside a Context.Provider.
const useContextFactory = (name, context) => {
  return () => {
    const ctx = useContext(context);
    if (ctx === undefined) {
      throw new Error(
        `use${name}Context must be used withing a ${name}ContextProvider.`
      );
    }
    return ctx;
  };
};
/* eslint-enable */

export const useTemperatureContext = useContextFactory(
  "TemperatureContext",
  TemperatureContext
);

export const useForecastContext = useContextFactory(
  "ForecastContext",
  ForecastContext
);
export const useTempUnitContext = useContextFactory(
  "TempUnitContext",
  TempUnitContext
);

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
