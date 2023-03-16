import React from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';

const Nosotros = () => {

    const {darkMode} = useDarkModeContext ()

    return (
        <div className= {`contenedor ${darkMode ? "contenedorContenidoDark txtHomeDark" : "contenedorContenido txtHome"} col-12 d-flex flex-column p-5`}>
            <h2 className={`${darkMode ? "txtHomeDetalle" : ""}`}>El mundo a tu MANERA</h2>
            <p className='my-2'>La trayectoria que nos hizo la mayor multinacional argentina de distribuidores de cosmeticos masculinos comenzó en 1969, cuando Roger Federik inauguró una pequeña tienda en la calle Gral. Paz, en Córdoba. Desde el primer día, construimos un negocio con la misión de proporcionar el bien estar del hombre, relaciones armónicas del individuo consigo mismo, con los otros y con la naturaleza.</p>
            <div className='d-md-flex col-12 justify-content-between my-5'>
                <div className='col-md-4'>
                    <h2 className={`${darkMode ? "txtHomeDetalle" : ""}`}>Quienes somos...</h2>
                    <p>Desde nuestra fundación, creemos en el potencial de las relaciones y en el poder de la cosmética masculina como ampliadora de conciencia. Llegamos a millones de consumidores por diversos canales, siendo el principal de ellos cerca de 1,7 millones de Consultoras en Brasil, Argentina, Chile, Colombia, México y Perú. Conocé nuestra forma de hacer negocio.</p>
                </div>
                <div className='col-md-7'><img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/nosotros01.jpg?alt=media&token=459dee9a-3061-4252-9858-4e1d10f3dc46" alt="Hombre BN" /></div>
            </div>
        </div>
    );
}

export default Nosotros;
