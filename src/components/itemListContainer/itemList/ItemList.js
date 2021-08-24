import data from '../../data/Data';
import Item from './item/Item';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {Spinner} from 'react-bootstrap'; 


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
        {cargando ?
         <div className={classes.Spinner}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
        </div> 
        :
        productos.map((producto)=>
            <Item 
            key={producto.id} 
            img={producto.img}
            imgbs={producto.imgbs}
            name={producto.name} 
            price={producto.price} 
            frame={producto.frame}
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
    },

    Spinner : {
        height:  300,
        marginTop: 200,
        display: "flex",
        justifyContent: "space-between"

    }
}))

export default ItemList;