import React from 'react';
import './style.css';

const Card = ({ property: { index, picture, header } }) => {
  return (
    <div id={`card-${index}`} className="card">
      <div className="details">
        <img src={picture} alt={picture} />
        <ul className="features">
          <li className="header">{header}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
