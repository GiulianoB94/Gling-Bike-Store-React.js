
import ItemDetail from '../itemDetailContainer/ItemDetail'
import React, { useEffect, useState } from 'react';
import data from '../data/Data';
import {useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {Spinner} from 'react-bootstrap'; 


const ItemDetailContainer = (props) => {
   
    const classes = useStyles()
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const {name, id} = useParams()


    // const {id} = useParams()
   
    useEffect(()=> {
        const productos = ()=> {
            return new Promise ((resolve,reject) => {
                setTimeout (() => {
                    resolve(data)
                },2000)
            })
        }


console.log (productos)

        productos().then((items)=> { 
            const producto = items.find(producto => producto.id === id)
            setProducto(producto)
            setCargando(false)
        })
    },[])

    return (
        <>
         <div className={classes.Cont}>
            <h1>{props.titulo}</h1>
                <h2>{props.subtitulo}</h2>
        </div>
        {cargando ?
        <div className={classes.Spinner}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
        </div> 
        :
            
            <div className={classes.itemCont}>
                <ItemDetail 
                imgbs={producto.imgbs}
                name={producto.name} 
                frame={producto.frame}
                color={producto.color} 
                price={producto.price} 
                stock={producto.stock} />
            </div>
        }
        
        </>
    )
}

const useStyles = makeStyles ((theme) => ({

    Spinner : {
        height:  300,
        marginTop: 200,
        display: "flex",
        justifyContent: "center"

    },

    Cont : {
        marginTop: "5%"
    },

    itemCont : {
        marginTop: "10%",
        marginBottom: "10%",
    }



}))


export default ItemDetailContainer;