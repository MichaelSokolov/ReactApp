import React from 'react';
import style from './PropertyItem.module.css';
import photoNA from './../../../Images/photo_not_available.jpg'



const PropertyItem = (props) => {

    const comune = () => {
        if (props.item.admin_region === '') {
            return `${props.item.city}`
        }
        else {
            return `${props.item.admin_region} р-н,  ${props.item.city}`
        }
    }

    const photoNotAvailable = () => props.item.photo.length !== 0 ? props.item.photo[0] : photoNA;

    return (

        <div className={style.property_card}>
            <div className={style.photo} >
                <a href={props.item.url}>
                    <img src={photoNotAvailable()} alt='house_image' />
                </a>
            </div>
            <div className={style.info}>
               <div className ={style.adress}> 
                    <div className = {style.adress_first_line}>
                        {props.item.street !== null||'' ? `${props.item.street} ` : ''} {props.item.house !== null||"" ? `${props.item.house},` :  ''} {props.item.place !== null||"" ? props.item.place : ''}
                    </div>
                    <div>
                        {comune()}
                    </div>
                    <div>
                        {props.item.distance_metro!== null||'' && props.item.guide!== null||'' ? `${props.item.distance_metro} метров до м. ${props.item.guide}` : 'Info about metro is not available'} 
                    </div>
                    <div>
                        {props.item.price} ₴
               </div>
            </div>
                <div className={style.general_info}>
                    <div className={style.first}>
                        <div>
                            Bedrums: {props.item.type}
                        </div>
                        <div>
                            Area: {props.item.area} <span>m2</span>
                        </div>
                        <div>
                            Floor: {props.item.floor} from {props.item.floor_numb}
                        </div>
                    </div>
                    <div className={style.seccond}>
                        <div>
                            Year: {props.item.year}
                        </div>
                        <div>
                            Available: {props.item.date_pub}
                        </div>
                        <div>
                            Phone: {props.item.phone}
                        </div>
                    </div>
                </div>
                <div className={style.description}>
                    {props.item.text}
                </div>
            </div>
        </div>

    )
}

export default PropertyItem;