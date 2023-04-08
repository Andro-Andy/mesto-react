import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      {/* Template */}
      <template id='element' />
      {/* /Template */}
      {/* Popup_edit */}
      <div className='popup popup_edit'>
        <div className='popup__container'>
          <button
            type='button'
            className='popup__container-close'
            title='Закрыть'
          />
          <h3 className='popup__container-info'>Редактировать профиль</h3>
          <form className='popup__form' name='edit__form' noValidate>
            <input
              id='input-edit-profile'
              type='text'
              className='popup__form-input'
              placeholder='Имя'
              name='name'
              minLength={2}
              maxLength={40}
              required
            />
            <span id='input-edit-profile-error' className='popup__error' />
            <input
              type='text'
              placeholder='О Себе'
              className='popup__form-input popup__form-input_bio'
              name='info'
              minLength={2}
              maxLength={200}
              id='input-edit-occupation'
              required
            />
            <span className='popup__error' id='input-edit-occupation-error' />
            <button
              type='submit'
              title='сохранить'
              className='popup__form-submit'
              value='Сохранить'
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* /Popup_edit */}
      {/* Popup_add*/}
      <div className='popup popup_add'>
        <div className='popup__container'>
          <button className='popup__container-close' title='Закрыть' />
          <h3 className='popup__container-info'>Новое место</h3>
          <form className='popup__form' name='add__form' noValidate>
            <input
              type='text'
              placeholder='Название'
              className='popup__form-input popup__form-input_name'
              id='name-card'
              name='name'
              minLength={2}
              maxLength={30}
              required
            />
            <span id='name-card-error' className='popup__error' />
            <input
              placeholder='Ссылка на картинку'
              className='popup__form-input popup__form-input_link'
              type='url'
              id='link'
              name='link'
              required
            />
            <span id='link-error' className='popup__error' />
            <button
              type='submit'
              title='сохранить'
              className='popup__form-submit'
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* /Popup_add */}
      {/* Popup_avatar */}
      <div className='popup popup_avatar-edit'>
        <div className='popup__container'>
          <button className='popup__container-close' />
          <h3 className='popup__container-info'>Обновить аватар</h3>
          <form className='popup__form' name='edit__avatar-form' noValidate>
            <input
              id='link-avatar'
              type='url'
              className=' popup__form-input popup__form-input_link'
              name='link'
              placeholder='Ссылка на картинку'
              required
            />
            <span id='link-avatar-error' className='popup__error' />
            <input
              id='avatar-edit-submit'
              className='popup__form-submit'
              type='submit'
              defaultValue='Сохранить'
            />
          </form>
        </div>
      </div>
      {/* /Popup_avatar */}
      {/*popup_img */}
      <div className='popup popup_photo'>
        <div className='popup__images'>
          <button className='popup__container-close' title='Закрыть' />
          <img alt='#' className='popup__image' />
          <p className='popup__photo-text' />
        </div>
      </div>
      {/*/popup_img */}
      {/* popup__delete-confirm */}
      <div className='popup popup_delete-confirm'>
        <div className='popup__container'>
          <button className='popup__container-close' />
          <h3 className='popup__container-info'>Вы уверены?</h3>
          <form className='popup__form'>
            <button className='popup__form-submit' type='submit'>
              Да
            </button>
          </form>
        </div>
      </div>
      {/* /popup__delete-confirm */}
      {/*  */}
    </div>
  );
}

export default App;
