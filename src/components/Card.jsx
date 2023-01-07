import Button from "./Button";


function Card(props) {
    console.log(props);


    //fragment

    return (
        <div>
            <h3> {props.title} </h3>
            <br />
            <img className="image" src={props.image} />
            <h3> ${props.price} </h3>
            <small> {props.description} </small>
            <Button className="buttonBuy" />
        </div>
    );
}

export default Card;
