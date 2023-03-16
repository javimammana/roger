import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useCarritoContext } from '../../context/CarritoContext';
import { useDarkModeContext } from '../../context/DarkModeContext';

const Cart = () => {
    const {darkMode} = useDarkModeContext ()
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    
    return (
        <>
        
            {
                carrito.length === 0
                ?
            
                <div className= {`contenedor ${darkMode ? "contenedorContenidoDarkTotal" : "contenedorContenido"} col-12 d-flex flex-column align-items-center p-5`}>
                    <h2 className={`${darkMode ? "txtDark" : "txt"} my-5`}>Tu Carrito esta Vacio...</h2>
                    <Link className='nav-link col-6' to={"/productos"}><button className={`${darkMode ? "btnDetailDark" : "btnDetail"} my-5 col-12`}>Explorá nuestros Productos!</button></Link>
                </div>
            
                :
                <div className= {`contenedor ${darkMode ? "contenedorContenidoDark" : "contenedorContenido"} col-12 d-flex flex-column p-5`}>
                    <h2 className={`${darkMode ? "txtDark" : "txt"} mb-5`}>Productos en Carrito</h2>
                    <ItemList prods={carrito} plantilla = "ItemCart"/>
                    <div className='col-12'>
                        <div className='d-flex justify-content-between flex-column flex-sm-row '>
                            <p className={`${darkMode ? "itemTotalDark": "itemTotal"} text-end order-sm-1`}>Total de compra: ${totalPrice()}</p>
                            <button className={`${darkMode ? "btnDetailWarningDark" : "btnDetailWarning"} px-3`} onClick={() => emptyCart()}>Vaciar Carrito</button>
                        </div>
                        <div className='d-flex flex-column justify-content-center col-12'>
                            <Link className='nav-link col-12' to={"/productos"}><button className={`${darkMode ? "btnDetailDark" : "btnDetail"} col-12 mt-5 px-3`}>Continuar comprando</button></Link>
                            <Link className='nav-link col-12' to={"/checkout"}><button className={`${darkMode ? "btnDetailDark" : "btnDetail"} mt-3 col-12 px-3`}>Finalizar Compra</button></Link>
                        </div>
                    </div>
                </div>
            }
        
        </>
    )


}

export default Cart;
