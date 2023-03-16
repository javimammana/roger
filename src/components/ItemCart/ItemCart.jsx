import React from 'react';
import { useCarritoContext } from '../../context/CarritoContext';
import ItemCountCart from '../ItemCountCart/ItemCountCart';
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemCart = ({ item }) => {
    const {darkMode} = useDarkModeContext ()
    const {removeItem} = useCarritoContext()
    const {addItemCart} = useCarritoContext()

    const onAdd = (cantidad) => { 
        addItemCart (item, cantidad)
    }

    return (
        <div className={`${darkMode ? "cardCartDark" : "cardCart"} d-flex col-12 mb-4 p-3 justify-content-between flex-column flex-sm-row`}>
            <div className='col-sm-2'><img className='img-fluid' src={`${item.img}`} alt = {`Imagen de ${item.nombre}`} /></div>
            
            <div  className='col-sm-8 ps-sm-3'>

                <div className={`${darkMode ? "itemCardDark": "itemCard"}`}>
                    <div className='d-flex flex-column align-items-end'>
                        <h5>{item.nombre}</h5>
                        <p>{item.marca}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-column flex-sm-row'>
                        <p className='me-2'>Cantidad:</p><ItemCountCart valInicial = {item.cant} stock = {item.stock} onAdd = {onAdd}/>
                        </div>
                        <p>${item.precio} c/u</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btnCarrito' onClick={() => removeItem(item.id)}><img className='imgCarrito' src= {`${darkMode ? "../img/borrarDark.png" : "../img/borrar.png"}`} /></button>
                        <p>Subtotal: ${item.cant * item.precio}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ItemCart;
