import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div className='cardClass d-flex flex-column align-items-center px-3 py-2 m-2'>
            <img src = {`/img/tienda/${item.img}`} alt = {`Imagen de ${item.nombre}`} />
            <div className='mt-3 col-12'>
                <h5>{item.nombre}</h5>
                <div className='d-flex justify-content-between'>
                    <p>{item.marca}</p>
                    <p>${item.precio}</p>
                </div>
                <Link to={`/item/${item.id}`}><button className='cardBtn py-1'>Ver MAS!</button></Link>
            </div>
        </div>
    );
}

export default Item;
