import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className='element'>
      <img
        alt={card.name}
        src={card.link}
        onClick={handleClick}
        className='element__image'
      />
      <div className='element__info'>
        <button className='element__delete' type='button' />
        <h2 className='element__title'>{card.name}</h2>
        <div className='element__like-container'>
          <button type='button' className='element__like' />
          <span className='element__counter-likes'>{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
