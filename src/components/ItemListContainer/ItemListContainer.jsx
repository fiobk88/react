import { useEffect, useState } from "react";
import Card from "../Card";
import Flex from "../Flex/Flex";
import obtenerProductos from "../../Data/mockService";

function ItemListContainer() {
    const [cities, setCities] = useState([]);

    useEffect(
        () => {
            obtenerProductos().then(
                (respuesta) => {
                    setCities(respuesta);
                });
        }
    );



    return (
        <Flex className="flex" >
            {cities.map((itemIterado) => { return <Card key={itemIterado.id} item={itemIterado} /> })}
        </Flex>
    );

}

export default ItemListContainer;