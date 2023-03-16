import React from 'react';
import { useDarkModeContext } from '../../../context/DarkModeContext';

const Fitness = () => {

    const {darkMode} = useDarkModeContext ()

    return (
        <div>
            <div className='d-flex'>
                <h2 className={`${darkMode ? "txtHomeDark" : "txtHome"}`}>Fitnetss</h2>
                <div className='barra mt-3 ms-5'></div>
            </div>
            
            <div className='d-flex flex-column flex-md-row'>

                <div className='cardHome p-2 col-12 col-md-3'>
                    <div>
                        <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/fitness01.jpg?alt=media&token=81d2b30a-f403-4e95-95ed-f3020ef6a4b8" alt="" />
                    </div>
                    <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>7 Gadgets deportivos para un amante del deporte</h3>
                </div>

                <div className='cardHome p-2 col-12 col-md-3'>
                    <div>
                        <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/fitness02.jpg?alt=media&token=d845819f-4283-4441-a19e-b8e11f4129b9" alt="" />
                    </div>
                    <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Bebidas isotónicas perfectas para deportistas</h3>
                </div>

                <div className='cardHome p-2 col-12 col-md-3'>
                    <div>
                        <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/fitness03.jpg?alt=media&token=e63c5838-468a-440b-bf2e-7ea2ebc843ab" alt="" />
                    </div>
                    <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Las mejores zapatillas de CrossFit para hombre</h3>
                </div>

                <div className='cardHome p-2 col-12 col-md-3'>
                    <div>
                        <img className='img-fluid' src="https://firebasestorage.googleapis.com/v0/b/roger-fbc1e.appspot.com/o/fitness04.jpg?alt=media&token=ba142599-95a4-4974-9e6a-9e6b9e11e775" alt="" />
                    </div>
                    <h3 className={`${darkMode ? "txtHomeDark" : "txtHome"} txtHomeSize p-3`}>Mejores SmarWatch para el gimnasio</h3>
                </div>
            </div>
        </div>
    );
}

export default Fitness;
