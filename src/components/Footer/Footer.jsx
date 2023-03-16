import React from 'react';

const Footer = () => {
    return (
        <footer className='menu'>
            <div className='contenedor d-flex flex-column flex-md-row justify-content-between align-items-center'>
                <div className='order-md-1 mt-3 mb-5 my-md-0'>
                    <button className='btnFooter'><img src="../img/tweeter.png" alt="Tweeter" /></button>
                    <button className='btnFooter'><img src="../img/facebook.png" alt="Facebook" /></button>
                    <button className='btnFooter'><img src="../img/instagram.png" alt="Instagram" /></button>
                    <button className='btnFooter'><img src="../img/whatsapp.png" alt="WhatsApp" /></button>
                </div>
                <h5  className='copyrigth'>© 2023 Mammana Javier, todos los derechos reservados.-</h5>
            </div>
        </footer>
    );
}

export default Footer;
