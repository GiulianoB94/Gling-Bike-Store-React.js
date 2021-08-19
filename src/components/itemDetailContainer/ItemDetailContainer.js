
import ItemDetail from '../itemDetailContainer/ItemDetail'
import React, { useEffect, useState } from 'react';
import data from '../data/Data';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {


    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()
   



    useEffect(()=> {
        const productos = ()=> {
            return new Promise ((resolve,reject) => {
                setTimeout (() => {
                    resolve(data)
                },3000)
            })
        }


console.log (productos)

        productos().then((items)=> { 
            const producto = items.find(producto => producto.id === '1')
            setProducto(producto)
            setCargando(false)
        })
    },[])

    return (
        <>
        {cargando ? <h2>Loading products..</h2> :
            <ItemDetail 
            name={producto.name} 
            price={producto.price} 
            color={producto.color} 
            stock={producto.stock} />
        }
        
        </>
    )
}

export default ItemDetailContainer;