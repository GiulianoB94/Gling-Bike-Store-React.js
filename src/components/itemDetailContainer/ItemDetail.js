import React, { useState } from 'react';
import ItemCount from '../itemListContainer/itemCount/ItemCount';
import { makeStyles } from '@material-ui/core';
import { Container, Row , Col, Button} from 'react-bootstrap';




const ItemDetail = ({imgbs,name,price,color,id,frame,stock}) => {

    const classes = useStyles()

    const [itemCountVisible, setItemCountVisible] = useState(true)
    const [itemsCount, setItemsCount] = useState(0)

    const onAdd = (unidades) => {
        setItemsCount(unidades)
    }

    const onAddToCart = () => {
        setItemCountVisible(false)
    }

    const onBuy = () => {
        setItemCountVisible(false)
    }

   

    return(
        <Container className={classes.item}>
            <Row>
                <Col>
                    <img className={classes.img} src={imgbs}/>
                </Col>
                <Col>
                    <div className={classes.ContDetail}>
                        <h1>{id}</h1>
                        <h2>{name}</h2>
                        <h2>Frame: {frame}</h2>
                        <h2>{color}</h2>
                        <h3>{price}</h3>
                        {itemCountVisible && <ItemCount defaultValue = {0} stock={stock} onAdd={onAdd} />}
                        {itemsCount}
                        <Button onClick={onAddToCart} >Agregar al carrito</Button>
                        <Button onClick={onBuy} >Comprar</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}




const useStyles = makeStyles ((theme) => ({

    img: {
        width: 600,
        heigh: 600
    },

    ContDetail: {
        marginTop: "20%",
        border: "solid 1px #000"
    }
  
}))


export default ItemDetail;



