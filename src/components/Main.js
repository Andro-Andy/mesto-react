function Main() {
  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector(".popup_avatar-edit");
    popupEditAvatar.classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector(".popup_edit");
    popupEditProfile.classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    const popupAddPlace = document.querySelector(".popup_add");
    popupAddPlace.classList.add("popup_opened");
  }
  return (
    <>
      <main>
        {/* Profile */}
        <section className='profile'>
          <div className='profile__content'>
            <button className='profile__avatar'>
              <img
                src='#'
                alt='Аватар'
                className='profile__avatar-edit'
                onClick={handleEditAvatarClick}
              />
            </button>
            <div className='profile__info'>
              <h1 className='profile__name'>Жак-Ив Кусто</h1>
              <button
                className='profile__edit-button'
                title='Редактировать профиль'
                onClick={handleEditProfileClick}
              />
              <p className='profile__bio' />
            </div>
          </div>
          <button
            className='profile__add-button'
            title='Добавить карточку'
            onClick={handleAddPlaceClick}
          ></button>
        </section>
        {/* /Profile */}
        {/* Grid-element */}
        <section className='grid-element'>
          <div className='elements' />
        </section>
        {/* /Grid-element */}
      </main>
    </>
  );
}
export default Main;
