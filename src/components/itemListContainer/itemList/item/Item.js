import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../itemCount/ItemCount';




const Item = ({name,price,color,stock,Shop,id,img}) => {
    return(
        <div className='item'>
            <Link to={`/${Shop}/${id}`}>
            <h2>COMPONENTE ITEM</h2>
            <div>{img}</div>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{color}</h4>
            <h4>{stock}</h4>
            <ItemCount stock={stock}/>
            </Link>
        </div>
    )
}

export default Item;