import data from '../../data/Data';
import Item from './item/Item';
import React, { useEffect, useState } from 'react';


const ItemList = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=> {
        const productos = ()=> {
            return new Promise ((resolve,reject) => {
                setTimeout (() => {
                    resolve(data)
                },2000)
            })
        }
        productos().then((items)=> { 
            setProductos(items)
            setCargando(false)
        })
    },[])

    return (
        <>
        {cargando ? <h2>Cargando productos..</h2> :
        productos.map((producto)=>
            <Item 
            key={producto.id} 
            name = {producto.name} 
            price={producto.price} 
            color={producto.color} 
            stock={producto.stock}/>
        )
        }
        </>
    )
}

export default ItemList;