import { useEffect, useState } from "react";
import "../blocks/App.css";
import "../blocks/Header.css";
import "../blocks/Main.css";
import "../blocks/Footer.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ModalWithForm from "../components/ModalWithForm";
import ItemModal from "../components/ItemModal";
import { defaultClothingItems } from "../utils/clothingItems.js";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { coordinates, APIkey } from "../utils/clothingItems.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const onAddButtonClick = () => {
    setActiveModal("add_garment");
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="page">
        <div className="page__content">
      

      <Header onAddButtonClick={onAddButtonClick} weatherData={weatherData} />
      <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        handleCloseClick={handleCloseClick}
      >
        <button
          onClick={handleCloseClick}
          className="modal__close-btn"
          type="button"
        >
          <img
            className="modal__close-icon"
            src="/src/images/modal__close-btn.png"
            alt="Close"
          />
        </button>

        <label htmlFor="name" className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="link" className="modal__label">
          Image
          <input
            className="modal__input"
            type="text"
            name="link"
            id="Image Url"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>

          <input
            id="hot"
            className="modal__radio"
            type="radio"
            name="weather"
          />
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            Hot
          </label>
          <br />

          <input
            id="hot"
            className="modal__radio"
            type="radio"
            name="weather"
          />
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            Warm
          </label>
          <br />

          <input
            id="cold"
            className="modal__radio"
            type="radio"
            name="weather"
          />
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            Cold
          </label>
          <br />
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        handleCloseClick={handleCloseClick}
      />
      <Footer />
      </div>
      </div>
    </>
  );
}

export default App;
