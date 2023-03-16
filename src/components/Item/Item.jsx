import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';

const Item = ({item}) => {

    const {darkMode} = useDarkModeContext ()
    console.log (darkMode)

    return (
        <div className={`${darkMode ? "cardClassDark" : "cardClass"} d-flex flex-column align-items-center justify-content-between px-3 pb-2 pt-3 m-2`}>
            <img src = {`${item.img}`} alt = {`Imagen de ${item.nombre}`} />
            <div className='mt-3 col-12'>
                <h5>{item.nombre}</h5>
                <div className=''>
                    <div className='d-flex justify-content-between'>
                        <p>{item.marca}</p>
                        <p>${item.precio}</p>
                    </div>
                    <Link to={`/item/${item.id}`}><button className={`${darkMode ? "cardBtnDark" : "cardBtn"} py-1`}>Ver MAS!</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Item;
