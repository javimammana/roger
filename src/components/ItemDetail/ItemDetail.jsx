import React from 'react';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({prod}) => {
    return (
        <div className='cardDetail d-flex col-10'>
            <div className='col-6 p-3'>
                <img src = {`/img/tienda/${prod.img}`} alt = {`Imagen de ${prod.nombre}`}/>
            </div>
            <div className='col-6 p-3'>
                <h5>{prod.nombre}</h5>
                <p>Marca: {prod.marca}</p>
                <div className='d-flex justify-content-between'>
                    <p>Stock: {prod.stock}</p>
                    <p>Precio: ${prod.precio}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <ItemCount valInicial = {1} stock = {prod.stock}/>
                    <button className='btnDetail col-5'>Finalizar Compra</button>
                </div>
            </div>
            
        </div>
    );
}

export default ItemDetail;
