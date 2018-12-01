import React from 'react';
import './Card.css';


const Card = (props) => {
    console.log(props)
    return(
        <div className="Card"> 
            <img src={props.image_url} className="businessImage"></img>
            <p className="businessName">{props.name}</p>
            <p className="cardText"> {props.review_count}</p>
            <p className="cardText">{props.category}</p>
            <p className="cardText">{props.rating}</p>
        </div>
    );
};

export default Card;