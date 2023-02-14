import React from 'react';
import { Link } from 'react-router-dom';

const Secciones = () => {
    return (
        <>
            <li className='px-3 menuBar'><Link>Nosotros</Link></li>
            <li className='px-3 menuBar'><Link>Contacto</Link></li>
        </>
    );
}

export default Secciones;
