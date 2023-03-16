import React from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
import Fitness from '../Home/Fitness/Fitness';
import Nutricion from '../Home/Nutricion/Nutricion';
import Salud from '../Home/Salud/Salud';

const Articulos = () => {

    const {darkMode} = useDarkModeContext ()

    return (
        <div className= {`contenedor ${darkMode ? "contenedorContenidoDark" : "contenedorContenido"} col-12 d-flex flex-column p-5`}>

            <Salud/>

            <Nutricion/>
            
            <Fitness/>

        </div>
    );
}

export default Articulos;
