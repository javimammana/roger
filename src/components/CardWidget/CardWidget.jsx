import React from 'react';


const CardWidget = ({cantCarrito}) => {
    return (
        <div className='d-flex me-3'>
            <button className='btnCarrito'><img className='imgCarrito me-2' src='../img/carrito.png' alt="Carrito" /></button>
            <p className='cantCarrito'>{cantCarrito}</p>
        </div>
    );
}

export default CardWidget;
