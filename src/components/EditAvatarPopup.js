import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name='avatar-edit'
      title='Сменить аватар'
      buttonText='Сохранить'
    >
      <input
        id='link-avatar'
        type='url'
        className='popup__bio link popup__form-input popup__form-input_link'
        name='link'
        placeholder='Ссылка на картинку'
        required
      />
      <span id='link-avatar-error' className='popup__error' />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
