import React from 'react';
import Itemlist from './itemList/ItemList';
import { Container,Col,Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';



const ItemListContainer = (props) => {

    const classes = useStyles()
   
    return(
        <>
        <div className={classes.Cont}>
            <h1>{props.titulo}</h1>
                <h2>{props.subtitulo}</h2>
            <Container>
                <Row>
                    <Col><Itemlist/></Col>
                </Row>
            </Container>
        </div>
        </>
    )
}


const useStyles = makeStyles ((theme) => ({
    Cont : {
        marginTop: "5%"
    }
}))





export default ItemListContainer;