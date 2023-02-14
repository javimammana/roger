import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {

    return (
            <li className='dropdown px-3 menuBar'><Link>Productos</Link>
                <ul className='dropdownMenu'>
                    <li className='txtDecoration'><Link to={`/category/Rostro`}>Cuidado de Rostro</Link></li>
                    <li className='txtDecoration'><Link to={`/category/Cuerpo`}>Cuidado del Cuerpo</Link></li>
                    <li className='txtDecoration'><Link to={`/category/Especial`}>Cuidados Especiales</Link></li>
                </ul>
            </li>
    );
}

export default Categorias;
