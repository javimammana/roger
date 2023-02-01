import React from 'react';
import { useState } from 'react';
const ItemCount = ({valInicial, stock}) => {

    const [contador, setContador] = useState (valInicial)

    const sumar = () => contador < stock && setContador (contador + 1)
    const resta = () => contador > valInicial && setContador (contador - 1)

    return (
        <div>
            <button onClick = {()=> resta()}>-</button>
            {contador}
            <button onClick = {() => sumar()}>+</button>
            
        </div>
    );
}

export default ItemCount;

