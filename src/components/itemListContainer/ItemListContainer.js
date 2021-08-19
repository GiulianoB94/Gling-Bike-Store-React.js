import React from 'react';
import Banner from '../Banner/Banner'
import Itemlist from './itemList/ItemList';
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';


const ItemListContainer = (props) => {

    return(
        <>
            
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <Itemlist/>
           <ItemDetailContainer/> 
        </>
    )
}

export default ItemListContainer;