import React from 'react';
import {NavLink} from 'react-router-dom'
import houseForSale from './../../../Images/house-for-sale1.png';
import style from './House.module.css';


const House = () => {
    return (
        <NavLink to='/house' className={style.cell_house}>
            <div className={style.image_house}>
                <img src = {houseForSale} alt='Houses for sale'/>
            </div>
            <div className={style.title_house}>
                Choose <br />
                houses for <span>sale</span>
            </div>
            <span className={style.button_house}>
                show all propositions
            </span>
        </NavLink>
    )


}

export default House;