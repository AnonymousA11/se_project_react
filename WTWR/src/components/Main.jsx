import { useState } from "react";
import reactLogo from "../images/react.svg";
import viteLogo from "/vite.svg";
import { defaultClothingItems } from "../utils/clothingItems";
import "../blocks/Main.css";
import WeatherCard from "../components/WeatherCard";
import ItemCard from "../components/ItemCard";
import { filterWeatherData } from "../utils/weatherApi";

function Main({ weatherData, handleCardClick }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F}&deg; F / You may want to wear:
        </p>
        <ul className="cards__List">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
