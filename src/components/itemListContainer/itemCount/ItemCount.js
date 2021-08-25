import React, {useEffect, useState} from 'react';
import {ButtonGroup,Button,Container,Col,Row} from 'react-bootstrap'; 
import { Card, makeStyles } from '@material-ui/core';

const ItemCount = (props) => {

    const classes = useStyles()
 
    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)
    const {onAdd} = props

    const handleStock = {

        sumarStock:() => {
            if (stock===0){
                alert('Out of stock available')
            } else {
                setUnidades(unidades +1)
                setStock(stock -1)
                 onAdd(unidades+1)
            }
        },
        restarStock: () => {
            if (unidades === 0){
               alert ('1 (one) units minimum required') 
            } else {
                setUnidades(unidades -1)
                setStock(stock+1)
                 onAdd(unidades-1)
            } 

            }


           
        }

         useEffect (() => {
             onAdd(unidades)
         }, [unidades])



      
        
      
        return(
            <Card fluid className={classes.Counter}>
                <ButtonGroup size="sm">
                    <Button  onClick={handleStock.restarStock} disabled={stock==='0'} variant="primary" size="sm">-</Button>
                    <div style={{ width: "70px",}}>{unidades}</div>
                    <Button onClick={handleStock.sumarStock} disabled={stock==='0'} variant="primary" size="sm">+</Button>
                </ButtonGroup>
                <p style={{fontFamily: 'Signika', marginTop:'5%'}}>Available Stock: {stock} </p>
            </Card>
        )
}

         
        const useStyles = makeStyles ((theme) => ({
            Counter: {
                marginTop: "3%",
                border: "solid thin 1px #000" 
            },



        }))
        export default ItemCount;
