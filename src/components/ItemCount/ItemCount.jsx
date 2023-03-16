import React from 'react';
import { useState } from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
const ItemCount = ({valInicial, stock, onAdd}) => {

    const [contador, setContador] = useState (valInicial)

    const sumar = () => contador < stock && setContador (contador + 1)
    const resta = () => contador > valInicial && setContador (contador - 1)
    
    const {darkMode} = useDarkModeContext ()

    return (
        <div className='d-flex col-12 justify-content-between flex-column flex-sm-row'>
            <div className='contadorClass col-7'>
                <button className={`${darkMode ? "btnMenosDark" : "btnMenos"}`} onClick = {()=> resta()}>-</button>
                {contador}
                <button className={`${darkMode ? "btnMasDark" : "btnMas"}`} onClick = {() => sumar()}>+</button>
            </div>
            <div className='col-sm-5 mt-5 mt-sm-0'>
                <button className={`${darkMode ? "btnDetailDark" : "btnDetail"} col-12`} onClick = {() => onAdd (contador)}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;

