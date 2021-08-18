import React from 'react';
import NavBar from '../navBar/NavBar';
import Banner from './banner/Banner';
import ItemCount from '../itemCount/ItemCount';
import Itemlist from './itemList/ItemList';

const ItemListContainer = (props) => {
    return(
        <>
            <NavBar/>
            <Banner/>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <ItemCount stock = '5'/>
            <Itemlist/>
        </>
    )
}

export default ItemListContainer;