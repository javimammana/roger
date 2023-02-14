import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funciones';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
    
    const [producto, setProductos] = useState ([])

    const {id} = useParams ()

    useEffect ( () => {
        consultarBDD('../json/productos.json').then(prods => {
            const prod = prods.find(item => item.id === parseInt(id))
            setProductos(prod)
        })
    })
    
    
    return (
        <div className='d-flex justify-content-center m-2'>
            <ItemDetail prod = {producto}/>
        </div>
    );
}

export default ItemDetailContainer;
