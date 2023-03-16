import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Categorias = React.memo(() => {

    const imgRostro = "rostro"
    const imgCuerpo = "cuerpo"
    const imgEspecial = "especial"
    const imgGeneral = "general"

    const [imagen, setImagen] = useState (imgGeneral)


    return (

                    <li className="menuBar">
                        <a className="menuBar nav-link dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Productos
                        </a>

                        <ul className="dropdown-menu menuDropdown justify-content-between">
                            <div className='contenedor d-flex col-12'>
                            <div className='contenedor col-3 menuIndex'>
                                <li onMouseEnter={ () => setImagen(imgRostro)} className='menuDropItem'><Link to={`/category/Rostro`}>Cuidado de Rostro</Link></li>
                                <li onMouseEnter={ () => setImagen(imgCuerpo)} className='menuDropItem'><Link to={`/category/Cuerpo`}>Cuidado del Cuerpo</Link></li>
                                <li onMouseEnter={ () => setImagen(imgEspecial)} className='menuDropItem'><Link to={`/category/Especial`}>Cuidados Especiales</Link></li>

                                <li onMouseEnter={ () => setImagen(imgGeneral)} className='mt-4 menuDropItem'><Link to={`/productos`}>Todos los productos</Link></li>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <div className={`d-none d-lg-block ${imagen}`}/>
                            </div>
                            </div>
                        </ul>
                        
                        

                    </li>

    );
})

export default Categorias;
