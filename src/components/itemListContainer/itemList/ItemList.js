import data from '../../data/Data';
import Item from './item/Item';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


const ItemList = () => {

    const classes = useStyles()
    const {Shop} =useParams()
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
           if(Shop != null) {
            const productoFilt = Item.filter((producto) => producto.Shop===Shop)
               setProductos(productoFilt)
            setCargando(false)

           }else {
                setProductos(items)
                setCargando(false)
           }
        })
    },[Shop])

    return (
        <>
        <div className={classes.ItemList}>
        {cargando ? <h2>Loading Products..</h2> :
        productos.map((producto)=>
            <Item 
            key={producto.id} 
            img={producto.img}
            name={producto.name} 
            price={producto.price} 
            color={producto.color} 
            stock={producto.stock}
            Shop={producto.Shop}
            id={producto.id} />
        )
        }
        </div>
        </>
    )
}



const useStyles = makeStyles ((theme) => ({

    ItemList : {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "0 auto"
    }


}))

export default ItemList;