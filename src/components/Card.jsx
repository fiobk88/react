import { useState } from "react";
import ButtonHome from "./Button/ButtonHome";
import { Link } from "react-router-dom";

import "./Card.css"



function Card(props) {
    const { title, price, image, description } = props.item;

    //fragment

    return (
        <div>
            <div className="item-card-title">
                <h3> {title} </h3>
            </div>
            <div className="item-card-image">
                <img className="image" src={image} />
            </div>
            <div className="item-card-description">
                <h3 className="item-card-price"> ${price} </h3>
                <small> {description} </small>
            </div>
            <Link to="/detalle">
                <ButtonHome padding="8px 12px" color="purple"> Ver más </ButtonHome>
            </Link>
        </div>
    );
}

export default Card;
