import React from 'react';

const Categorias = () => {
    return (
            <li className='dropdown px-3'>
                <button className='menuBar'><a className=''>Productos</a></button>
                <div className='dropdownMenu'>
                    <ul className>
                        <li><button className='txtDecoration'><a className=''>Cuidado de la Piel</a></button></li>
                        <li className='my-3'><button className='txtDecoration'><a className=''>Cuidado del Cabello</a></button></li>
                        <li><button className='txtDecoration'><a className=''>Cuidados Especiales</a></button></li>
                    </ul>
                </div>
            </li>
    );
}

export default Categorias;
