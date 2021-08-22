import React from 'react';
import ItemCount from '../itemListContainer/itemCount/ItemCount';




const ItemDetail = ({img,name,price,color,stock,id}) => {
    return(
        <div className='item'>
            <img src={img}/>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{color}</h4>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default ItemDetail ;