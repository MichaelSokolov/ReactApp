import React from 'react';
import House from "./House_cell/House"
import Flat from "./Flat_cell/Flat"
import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.home}>
            <House />
            <Flat />
        </div>
    )
}

export default Home;