import './ClimateStats.css';
import {useClimate} from '../../context/ClimateContext'

function ClimateStats() {
  const {thermometer, humidity} = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {thermometer}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;