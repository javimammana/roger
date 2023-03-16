import React from 'react';
import { useState } from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemCountCart = ({valInicial, stock, onAdd }) => {

        const [contador, setContador] = useState (valInicial)


        const sumar = () => {
            contador < stock && setContador (contador + 1)
            contador < stock && onAdd(contador + 1)
        }
        const resta = () => {
            contador > 1 && setContador (contador - 1)
            contador > 1 && onAdd(contador - 1)
        }
        
        const {darkMode} = useDarkModeContext ()
    
        return (
            <div className='d-flex justify-content-between'>
                <div className='contadorClass col-7'>
                    <button className={`${darkMode ? "btnMenosDark" : "btnMenos"}`} onClick = {()=> resta()}>-</button>
                    {contador}
                    <button className={`${darkMode ? "btnMasDark" : "btnMas"}`} onClick = {() => sumar()}>+</button>
                </div>
            </div>
        );
    }

export default ItemCountCart;
