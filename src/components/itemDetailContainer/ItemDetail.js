import React from 'react';
import ItemCount from '../itemListContainer/itemCount/ItemCount';




const ItemDetail = ({name,price,color,stock,id,img}) => {
    return(
        <div className='item'>
            <h2>Componente ITEM DETAIL</h2>
            <img src={img}/>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{color}</h4>
            <h4>{stock}</h4>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default ItemDetail ;