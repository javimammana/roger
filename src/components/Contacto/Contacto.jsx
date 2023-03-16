import React from 'react';
import { useRef } from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createConsulta } from '../../utils/firebase';

const Contacto = () => {

    const {darkMode} = useDarkModeContext ()

    let navigate = useNavigate()
    const datosContacto = useRef()

    const consultarConsulta = (e) => {
        e.preventDefault()
        const data = new FormData(datosContacto.current)
        const consulta = Object.fromEntries (data)
        createConsulta(consulta, new Date().toISOString()).then(() => {

            toast.warn (`Tu consulta fue enviada!`, {
                icon: "📬"
            })

        })

        e.target.reset()
        

        navigate("/")
    }
    
    return (

        <div className={`contenedor ${darkMode ? "contenedorContenidoDarkTotal" : "contenedorContenido"} contForm`}>
            <h2 className={`${darkMode ? "txtHomeDark" : "txtHome"}`}>Dejanos tu consulta aqui...</h2>
            <form className='col-12 d-flex flex-column align-items-center' onSubmit={consultarConsulta} ref={datosContacto}>

                <input type="text" className={`${darkMode ? "formItemDark" : "formItem"} col-10 col-md-8 px-2 my-3 mb-md-0`} name="nombre" placeholder='Nombre y Apellido' required/>

                <input type="email" className={`${darkMode ? "formItemDark" : "formItem"} col-10 col-md-8 px-2 my-3 mb-md-0`} name="email" placeholder='eMail' required/>

                <input type="number" className={`${darkMode ? "formItemDark" : "formItem"} col-10 col-md-8 px-2 my-3 mb-md-0`} name="telefono" placeholder='Teléfono' required/>

                <textarea type="text" className={`${darkMode ? "formItemDark" : "formItem"} consulta col-10 col-md-8 px-2 my-3 mb-md-0`} name="consulta" placeholder='Tu consulta aqui...' required/>

                <button type='submit' className={`${darkMode ? "btnDetailDark" : "btnDetail"} col-10 col-md-8 my-3`}>Enviar consulta</button>
            </form>
            
        </div>

    );
}

export default Contacto;
