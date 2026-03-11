import '../blocks/ItemModal.css';


function ItemModal({activeModal, handleCloseClick, card}) {
    return (
        
        <div className={`modal ${activeModal === "preview" && "modal__opened" }`}>
            <div className="modal__content modal__content_type_preview">
                <button onClick={handleCloseClick} className="modal__close-btn" type="button">
                <img className="modal__close-icon" src="/src/images/item__modal-close.png" alt="Close"/>
                </button>
                <img src={card.link} alt={card.name} className="modal__item-image"/>
                <div className="modal__footer">
                <h2 className="modal__caption">{card.name}</h2>
                <p className="modal__weather">Weather:{card.weather}</p>
                </div>
            </div>
        </div>

       
    );

};



export default ItemModal;