import '../blocks/Header.css';


function Header({onAddButtonClick, weatherData}) {
  const currentDate = new Date().toLocaleString("default", {
    month:"long",
    day:"numeric",

  });





  return (
    
    <header className="header">
    <div className="header__container">
    <img className="header__logo" src="/src/images/Logo.svg" alt="Logo"/>
    <p className="header__date-and-location">{currentDate}, {weatherData.city}</p>
    </div>
    
    <div className="header__user-container">
    <button onClick={onAddButtonClick} type="button" className="header__add-clothes-button">+Add clothes</button>
    <p className="header__user-name">Terrence Tegegne</p>
   </div>
    <img className="header__user-avatar" src="/src/images/Avatar.png" alt="User Avatar"/>
    
    
    

    
      </header>

      
  );
}

export default Header;