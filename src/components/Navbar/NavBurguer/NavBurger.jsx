import React from 'react';
import imgBurger from '../NavBurguer/img/burger.png';
const NavBurger = () => {
    return (
        <>
            <label className='me-3' htmlFor="burger"><img src={imgBurger} alt="Menu" /></label>
            <input type="checkbox" name id="burger" />
        </>
    );
}

export default NavBurger;
