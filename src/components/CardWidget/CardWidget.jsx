import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';

const CardWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <div className='d-flex me-3'>
            <Link className='nav-link' to={"/cart"}><button className='btnCarrito'><img className='imgCarrito me-2' src='../img/carrito.png' alt="Carrito" /></button></Link>
            { getItemQuantity() > 0 && <spam className='cantCarrito nav-link'>{getItemQuantity()}</spam>}
        </div>
    );
}

export default CardWidget;
