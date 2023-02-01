import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import Categorias from './Categorias/Categorias';
import Secciones from './Secciones/Secciones';
import NavBurger from './NavBurguer/NavBurger';

const Navbar = (imgCarrito) => {
    return (
    <>
        <nav className='col-12 d-flex justify-content-between pt-2 navBar'>
            <ul className='col-10 d-flex justify-content-between align-items-start menuOrden'>
                <li className='align-items-center '>
                    <button className='btnLogo'><img src='../img/logo.png' alt="Logo" /></button>
                </li>
                <li className=''>
                    <NavBurger/>
                    <ul className='menuGrupo'>
                        <Categorias/>
                        <Secciones/>
                    </ul>
                </li>
            </ul>
            <CardWidget cantCarrito={20} imgCarrito = {imgCarrito}/>
        </nav>
    </>
    );
}

export default Navbar;
