// ./src/context/ClimateContext.js

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export const ClimateProvider = (props) => {
    const[thermometer, setThermometer] = useState('45');
    const[humidity, setHumidity] = useState('40');

    return (
        <ClimateContext.Provider
            value={{
                thermometer,
                setThermometer,
                humidity,
                setHumidity
            }}>
                {props.children}
            </ClimateContext.Provider>
    )
}

// export default ClimateContext;
