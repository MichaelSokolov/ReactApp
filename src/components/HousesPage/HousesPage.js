import React from 'react';
import PropertyItem from './PropertyItem/PropertyItem';
import style from './HousesPage.module.css';

const HousesPage = (props) => {
    
    let pagesCountArray = Array(Math.ceil(props.totalItemsCount / props.pageSize)).fill().map((v, i) => i + 1);

    return (
        <div>
            <div className={style.paginator}>
                {pagesCountArray.map(page => <span
                    className={props.currentPage === page ? style.isActive : style.passive}
                    onClick={() => props.onPageClick(page)}
                    key={page}>
                    -{page}
                </span>)}
            </div>
            <div className={style.houses_page}>
                {props.items.map((i) => <PropertyItem item={i} key={i.id} />)}
            </div>
            <div>
                <textarea onChange={e => props.onAdressChange(e.target.value)} value={props.newAdressText} />
                <button onClick={props.addComment}> Add comment</button>
            </div>
        </div>
    )
}

export default HousesPage;