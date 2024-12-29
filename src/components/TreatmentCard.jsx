import React from 'react';
import './TreatmentCard.css';

const TreatmentCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-hover">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TreatmentCard;