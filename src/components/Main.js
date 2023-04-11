import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userBio, setuserBio] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cardsData]) => {
        setUserName(user.name);
        setuserBio(user.about);
        setUserAvatar(user.avatar);
        setCards(cardsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <main className='content'>
        <section className='profile'>
          <div className='profile__content'>
            <button
              onClick={onEditAvatar}
              className='profile__avatar'
              type='button'
            >
              <img
                src={userAvatar}
                className='profile__avatar-edit'
                alt='Аватар'
              />
            </button>
            <div className='profile__info'>
              <h1 className='profile__name'>{userName}</h1>
              <button
                type='button'
                onClick={onEditProfile}
                className='profile__edit-button'
              ></button>
              <p className='profile__bio'>{userBio}</p>
            </div>
          </div>
          <button onClick={onAddPlace} className='profile__add-button' />
        </section>
        <section className='grid-element'>
          <div className='elements'>
            {cards.map((card) => {
              return (
                <Card
                  card={card}
                  key={card._id}
                  name={card.name}
                  link={card.link}
                  onCardClick={onCardClick}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
export default Main;
