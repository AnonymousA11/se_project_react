import "../blocks/ModalWithForm.css";
import closeIcon from "/src/images/modal__close-btn.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseClick,
}) {
  return (
    <div
      name="add_garment"
      className={`modal ${activeModal === "add_garment" && "modal__opened"}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          className="modal__close-btn"
          type="button"
        >
          {" "}
          <img src={closeIcon}></img>
        </button>
        <form className="modal__form">
          {children}

          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
