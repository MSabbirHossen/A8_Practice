import React from 'react';
import { Link } from 'react-router';

const FlowerCard = ({flower}) => {
    return (
        <div>
            <img src={`${flower.image}`} alt={flower.name} />
            {/* <h3>{flower.name}</h3> */}
            <Link to={`/details/${flower.id}`}>{flower.name}</Link>
           
            <p>{flower.color}</p>
        </div>
    );
};

export default FlowerCard;