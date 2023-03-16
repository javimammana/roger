import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';
import ItemList from '../ItemList/ItemList';
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemListContainer = () => {

    const {darkMode} = useDarkModeContext ()

    const {idCategoria} = useParams ()

    console.log(idCategoria)

    const [productos, setProductos] = useState([])
    useEffect ( () => {

        if(idCategoria) {
            getProductos().then (products => {
                const idCategoriaId = products.find (categ => categ.categoria === idCategoria);
                const prods = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === idCategoriaId.idCategoria)
                const items = <ItemList prods={prods} plantilla = "Item"/>
                setProductos (items)
                console.log(idCategoriaId.idCategoria)
            })
        } else {
            getProductos().then (products => {
                const prods = products.filter(prod => prod.stock > 0)
                const items = <ItemList prods={prods} plantilla = "Item"/>
                setProductos (items)
            })
        }
    }, [idCategoria])
    
    return (
        <div className= {`contenedor ${darkMode ? "contenedorContenidoDark" : "contenedorContenido"} d-flex flex-wrap justify-content-around`}>
            {productos}
        </div>
    );
}

export default ItemListContainer;
