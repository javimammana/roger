import React from 'react';
import { useDarkModeContext } from '../../../context/DarkModeContext';

const Salud = () => {

    const {darkMode} = useDarkModeContext ()

    return (
        <div>
            <div className='d-flex'>
                <h2 className={`${darkMode ? "txtHomeDark" : "txtHome"}`}>Salud</h2>
                <div className='barra mt-3 ms-5'></div>
            </div>

            <div className='d-flex flex-column flex-md-row'>

                <div className='cardHome p-2 col-12 col-md-3'>
                    <div>
                        <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/salud01.jpg?alt=media&token=648d7d27-1c11-435c-8d50-dcb25c935315" alt="Productos para gym" />
                    </div>
                    <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Productos que no pueden faltar en tu neceser de Gimnacio</h3>
                </div>

                <div className='cardHome p-2 col-12 col-md-3'>
                    <div>
                        <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/salud02.jpg?alt=media&token=d7d3fdb1-571e-4452-8ec0-9baab5d529dd" alt="Hombre de espalda" />
                    </div>
                    <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Cómo controlar y eliminar el vello de la espalda sin depilarte</h3>
                </div>

                <div className='cardHome p-2 col-12 col-md-3'>
                    <div>
                        <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/salud03.jpg?alt=media&token=f8786303-214c-4c3e-ad21-18e563e8692c" alt="Tratamiento facial" />
                    </div>
                    <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Probamos el tratamiento facial más buscado</h3>
                </div>

                <div className='cardHome p-2 col-12 col-md-3'>
                    <div>
                        <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/salud04.jpg?alt=media&token=1523bcec-811e-45d7-af2e-0d28c425c5a0" alt="Hombre mascarilla" />
                    </div>
                    <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Mascarillas para cuidarte en casa</h3>
                </div>
            </div>

        </div>
    );
}

export default Salud;
