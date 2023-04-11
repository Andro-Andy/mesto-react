import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name='edit-profile'
      title='Редактировать профиль'
      buttonText='Сохранить'
    >
      <input
        id='input-edit-profile'
        className='popup__form-input popup__form-input_name'
        name='name'
        type='text'
        placeholder='Введите ваше имя'
        minLength={2}
        maxLength={40}
        required
      />
      <span id='input-edit-profile-error' className='popup__error' />
      <input
        id='input-edit-bio'
        name='info'
        type='text'
        className='popup__bio popup__form-input popup__form-input_bio'
        placeholder='Введите ваш род занятий'
        minLength={2}
        maxLength={200}
        required
      />
      <span id='input-edit-bio-error' className='popup__error' />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
