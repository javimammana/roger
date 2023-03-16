import React from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
import RogerCarrousel from './RogerCarrousel/RogerCarrousel';
import Fitness from './Fitness/Fitness';
import Nutricion from './Nutricion/Nutricion';
import Salud from './Salud/Salud';
import { Link } from 'react-router-dom';

const Home = () => {

    const {darkMode} = useDarkModeContext ()

    return (
        <div className= {`contenedor ${darkMode ? "contenedorContenidoDark" : "contenedorContenido"} col-12 d-flex flex-column p-5`}>
            <RogerCarrousel/>

            <Link className='nav-link' to={`/productos`}>
                <div className='banner d-flex flex-column align-items-end pt-5 pe-2 my-5'>
                    <h2 className={`${darkMode ? "txtHomeDark" : "txtHome"}`}>Consegui</h2>
                    <h2 className={`${darkMode ? "txtHomeDark" : "txtHome"}`}>todos los productos</h2>
                    <h2 className={`${darkMode ? "txtHomeDark" : "txtHome"}`}>en <spam className='txtBanner'>Nuestra TIENDA</spam></h2>
                </div>
            </Link>

            <Salud/>

            <Nutricion/>
            
            <Fitness/>

        </div>
    );
}

export default Home;
