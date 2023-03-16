import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({prod}) => {

    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()


    const onAdd = (cantidad) => { //agregar al producto en un futuro
        addItem (prod, cantidad)
    }

    return (
        <div className={`${darkMode ? "cardDetailDark" : "cardDetail"} d-flex col-10 my-5 flex-column flex-sm-row`}>
            <div className='col-12 col-sm-6 p-3'>
                <img src = {`${prod.img}`} alt = {`Imagen de ${prod.nombre}`}/>
            </div>
            <div className='col-12 col-sm-6 p-3 d-flex flex-column justify-content-between'>
                <div className=''>
                    <h5>{prod.nombre}</h5>
                    <p>Marca: {prod.marca}</p>
                </div>
                <div className=''>
                    <div className='d-flex justify-content-between flex-column flex-sm-row'>
                        <p>Stock: {prod.stock}</p>
                        <p>Precio: ${prod.precio}</p>
                    </div>
                    <div className='d-flex flex-column justify-content-between'>
                        <ItemCount valInicial = {1} stock = {prod.stock} onAdd = {onAdd} />
                    </div>
                    <Link className='nav-link mt-5' to={'/cart'}><button className={`${darkMode ? "btnDetailDark" : "btnDetail"} col-12`}>Ver Carrito</button></Link>
                </div>
            </div>
            
        </div>
    );
}

export default ItemDetail;
