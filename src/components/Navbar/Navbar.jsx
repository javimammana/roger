import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import Secciones from './Secciones/Secciones';
import { BotonDarkMode } from './BotonDarkMode/BotonDarkMode';

// import NavBurger from './NavBurguer/NavBurger';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="menu navbar navbar-expand-lg bg-body-tertiary">
            <div className="contenedor container-fluid">
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <Link to={'/'}><img className='logo' src='../img/logo.png' alt="Logo" /></Link>

                <div className='d-flex nav-link order-lg-1'>
                    <CardWidget/>
                    <BotonDarkMode/>
                </div>

                <div className="collapse navbar-collapse ms-lg-5" id="navbarSupportedContent">
                    <Secciones/>
                </div>



            </div>
        </nav>

    )
}

export default Navbar;
