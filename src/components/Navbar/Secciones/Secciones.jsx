import React from 'react';
import { Link } from 'react-router-dom';
import Categorias from '../Categorias/Categorias';

const Secciones = () => {
    return (
        <>
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Categorias/>
                    <li className='px-3 menuBar nav-link'><Link to={'/nosotros'}>Nosotros</Link></li>
                    <li className='px-3 menuBar nav-link'><Link to={'/articulos'}>Articulos</Link></li>
                    <li className='px-3 menuBar nav-link'><Link to={'/contacto'}>Contacto</Link></li>
                </ul>
        </>
    );
}

export default Secciones;
