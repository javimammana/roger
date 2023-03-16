import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState ([])

    const {id} = useParams ()

    useEffect ( () => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    })
    
    
    return (
        <div className='d-flex justify-content-center m-2'>
            <ItemDetail prod = {producto}/>
        </div>
    );
}

export default ItemDetailContainer;
