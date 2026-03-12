import "../blocks/WeatherCard.css";
import {
  weatherOptions,
  defaultWeatherOptions,
} from "../utils/clothingItems.js";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weatherCard">
      <p className="weather-card__temp">Today is {weatherData.temp.F}&deg; F</p>
      <img
        className="weather-card__image"
        src={weatherOption?.url}
        alt={`Card Showing ${weatherOption?.day ? "day" : "night"} time ${weatherOption?.condition}`}
      />
    </section>
  );
}

export default WeatherCard;
