import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funciones';


import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const {idCategoria} = useParams ()

    const [productos, setProductos] = useState([])
    useEffect ( () => {

        if(idCategoria) {
            consultarBDD('../json/productos.json').then (products => {
                const idCategoriaId = products.find (categ => categ.categoria === idCategoria);
                const prods = products.filter(prod => prod.idCategoria === idCategoriaId.idCategoria)
                const items = ItemList({prods})
                setProductos (items)
            })
        } else {
            consultarBDD('./json/productos.json').then (prods => {
                const items = ItemList({prods})
                setProductos (items)
            })
        }
    }, [idCategoria])
    
    return (
        <div className='d-flex flex-wrap justify-content-evenly py-3'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
