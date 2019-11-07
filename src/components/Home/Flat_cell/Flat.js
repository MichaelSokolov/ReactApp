import React from 'react';
import {NavLink} from 'react-router-dom'
import flatForSale from './../../../Images/flat-for-sale2.png';
import style from './Flat.module.css';


const Flat = () => {
    return (
        <NavLink to='/flats' className={style.cell_flat}>
            <div className={style.image_flat}>
                <img src={flatForSale} alt='Apartments for sale' />
            </div>
            <div className={style.title_flat}>
                Choose <br />
                apartments for <span>sale</span>
            </div>
            <div className={style.button_flat}>
                show all propositions
                    </div>
        </NavLink>
    )


}

export default Flat;