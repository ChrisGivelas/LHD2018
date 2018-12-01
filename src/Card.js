import React from 'react';
import './Card.css';


const Card = (props) => {
    return(
        <div className="Card"> 
            {/* <img src={props.imageURL} className="businessImage"></img> */}
            <p className="businessName">{props.name}</p>
            <p className="cardText">{props.score}</p>
            <p className="cardText"> {props.reviewCount}</p>
            <p className="cardText">{props.categories}</p>
        </div>
    );
};

export default Card;