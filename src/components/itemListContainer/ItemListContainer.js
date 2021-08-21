import React from 'react';
import Itemlist from './itemList/ItemList';
import { Container,Col,Row } from 'react-bootstrap';


const ItemListContainer = (props) => {

    return(
        <>
        <div>
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

export default ItemListContainer;