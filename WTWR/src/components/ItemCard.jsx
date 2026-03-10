import '../blocks/ItemCard.css'

function ItemCard({item, onCardClick}) {

  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="item-card">
      <h2 className="item-card__name">{item.name}</h2>
      <img 
      onClick={() => {handleCardClick(item)}} className="item-card__image" src={item.link} alt={item.name}/>
      <p className="item-card__description">This is an item card component.</p>
    </li>
  );
}

export default ItemCard;