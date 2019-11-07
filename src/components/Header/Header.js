import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../Images/123.png';
import style from './Header.module.css'

const Header = () => {
    return (
        <NavLink to='/' className={style.header}>
            <img src={logo} alt="logo" align="middle" />
            Header
        </NavLink>
    )
}

export default Header;