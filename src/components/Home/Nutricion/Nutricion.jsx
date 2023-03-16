import React from 'react';
import { useDarkModeContext } from '../../../context/DarkModeContext';

const Nutricion = () => {

    const {darkMode} = useDarkModeContext ()

    return (
    <div>
        <div className='d-flex'>
            <h2 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtBanner`}>Nutricion</h2>
            <div className='barra mt-3 ms-5'></div>
        </div>

        <div className='d-flex flex-column flex-md-row'>

            <div className='cardHome p-2 col-12 col-md-3'>
                <div>
                    <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/nutricion01.jpg?alt=media&token=80995514-c8fe-4a5a-8801-ff02a494adab" alt="Grasas saludables" />
                </div>
                <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Alimentos con grasas saludables</h3>
            </div>

            <div className='cardHome p-2 col-12 col-md-3'>
                <div>
                    <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/nutricion02.jpg?alt=media&token=7c6200a2-02db-4f6c-8313-c7e90e3f952e" alt="hongos" />
                </div>
                <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Hongos funcionales: qué son, para qué sirven</h3>
            </div>

            <div className='cardHome p-2 col-12 col-md-3'>
                <div>
                    <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/nutricion03.jpg?alt=media&token=32f8d8cd-81a0-43ae-979d-97704d1993ce" alt="Desayuno Calorias" />
                </div>
                <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Ayuno anabólico: la dieta definitiva</h3>
            </div>

            <div className='cardHome col-12 col-md-3'>
                <div>
                    <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/nutricion04.jpg?alt=media&token=9a521da4-7b6a-44c5-b830-57dc62b60459" alt="Desayuno Ganar masa muscular" />
                </div>
                <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Cuántas calorías debes comer para ganar músculo</h3>
            </div>
        </div>

    </div>

    );
}

export default Nutricion;
