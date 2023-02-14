import React from 'react';
import { useState } from 'react';
const ItemCount = ({valInicial, stock}) => {

    const [contador, setContador] = useState (valInicial)

    const sumar = () => contador < stock && setContador (contador + 1)
    const resta = () => contador > valInicial && setContador (contador - 1)

    return (
        <div className='contadorClass'>
            <button className='btnMenos' onClick = {()=> resta()}>-</button>
            {contador}
            <button className='btnMas' onClick = {() => sumar()}>+</button>
            
        </div>
    );
}

export default ItemCount;

