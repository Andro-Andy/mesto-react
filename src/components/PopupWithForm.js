import React from "react";

function PopupWithForm({ name, title, isOpen, onClose, children, buttonText }) {
  return (
    <>
      <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className='popup__container'>
          <button className='popup__container-close' onClick={onClose} />
          <h3 className='popup__container-info'>{title}</h3>
          <form className='popup__form' name={`${name}`} noValidate>
            {children}
            <button className='popup__form-submit' type='submit'>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
