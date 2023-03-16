import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import { createOrdenCompra, updateProducto, getProducto } from '../../utils/firebase';
import { useDarkModeContext } from '../../context/DarkModeContext';

const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const {darkMode} = useDarkModeContext ()


    let navigate = useNavigate()
    const datosForm = useRef()
    const consultarForm = (e) => {
        e.preventDefault()
        const data = new FormData(datosForm.current)
        const cliente = Object.fromEntries (data)

        if (data.get("email") !== data.get("remail")) {

            toast.warn (`Revise que ambos mail esten bien ingresados`, {
                icon: "📬"
            })

            

        } else {

            const aux = [...carrito]

            aux.forEach(prodCarrito => {
                getProducto (prodCarrito.id).then(prodBDD => {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodBDD.id, prodBDD)
                })
            })

            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then( ordenCompra => {

                toast.warn (`Gracias por tu compra! Tu pedido ${ordenCompra.id} por el total de $${new Intl.NumberFormat('de-DE').format(totalPrice())}, se registro con exito!`, {
                    icon: "🛒"
                })

            })

            e.target.reset()
            emptyCart()
            

            navigate("/")
        }
    }

    return (
<>
        {carrito.length === 0 
        ?
        <div className= {`contenedor ${darkMode ? "contenedorContenidoDarkTotal" : "contenedorContenido"} col-12 d-flex flex-column align-items-center p-5`}>
                <h2 className={`${darkMode ? "txtDark" : "txt"} my-5`}>No contas con productos en tu carrito para finalizar tu compra...</h2>
                <Link className='nav-link col-6' to={"/productos"}><button className={`${darkMode ? "btnDetailDark" : "btnDetail"} my-5 col-12`}>Explorá nuestros productos!</button></Link>
            </div>
        :
        
        <div className={`contenedor ${darkMode ? "contenedorContenidoDarkTotal" : "contenedorContenido"} contForm`}>
            <form className='col-12 d-flex flex-column align-items-center' onSubmit={consultarForm} ref={datosForm}>
                <div className='col-12 d-flex justify-content-evenly my-md-3 flex-column flex-md-row'>

                    <input type="text" className={`${darkMode ? "formItemDark" : "formItem"} col-md-5 px-2 my-3 mb-md-0`} name="nombre" placeholder='Nombre y Apellido' required/>
                    <input type="number" className={`${darkMode ? "formItemDark" : "formItem"} col-md-5 px-2 my-3 mb-md-0`} name="dni" placeholder='DNI' required/>
                </div>


                <div className='col-12 d-flex justify-content-evenly my-md-3 flex-column flex-md-row'>

                    <input type="email" className={`${darkMode ? "formItemDark" : "formItem"} col-md-5 px-2 my-3 mb-md-0`} name="email" placeholder='eMail' required/>
                    <input type="email" className={`${darkMode ? "formItemDark" : "formItem"} col-md-5 px-2 my-3 mb-md-0`} name="remail" placeholder='Repita eMail' required/>
                </div>


                <div className='col-12 d-flex justify-content-evenly my-md-3 flex-column flex-md-row'>

                    <input type="text" className={`${darkMode ? "formItemDark" : "formItem"} col-md-5 px-2 my-3 mb-md-0`} name="direccion" placeholder='Dirección' required/>
                    <input type="number" className={`${darkMode ? "formItemDark" : "formItem"} col-md-5 px-2 my-3 mb-md-0`} name="telefono" placeholder='Teléfono' required/>
                </div>


                <button type='submit' className={`${darkMode ? "btnDetailDark" : "btnDetail"} col-10 my-3`}>Finalizar Compra</button>
            </form>
            
        </div>

        } 
</>

        
    );
}

export default Checkout;
