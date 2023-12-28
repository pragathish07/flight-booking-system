// FlightDataContext.js
import { createContext, useContext, useState } from 'react';

const FlightDataContext = createContext();

export const useFlightData = () => {
  return useContext(FlightDataContext);
};

export const FlightDataProvider = ({ children }) => {
  const [flightData, setFlightData] = useState(null);

  const setFlight = (data) => {
    setFlightData(data);
  };

  return (
    <FlightDataContext.Provider value={{ flightData, setFlight }}>
      {children}
    </FlightDataContext.Provider>
  );
};
