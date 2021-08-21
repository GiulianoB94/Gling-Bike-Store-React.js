import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import ItemCount from '../../itemCount/ItemCount';
import {Card} from 'react-bootstrap'; 


const Item = ({name,price,color,stock,img}) => {
    const classes = useStyles()

    return(
        <div className={classes.item} >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title style={{fontFamily: 'Signika'}}>{name}</Card.Title>
                    <Card.Title style={{fontFamily: 'Signika'}}>{color}</Card.Title>
                    <Card.Title >{price}</Card.Title>
                </Card.Body>
            </Card>
            <Card.Title className="counter"><ItemCount stock={stock}/></Card.Title>
        </div>
    )
}



const useStyles = makeStyles ((theme) => ({
    item: {
        margin: "4rem 2rem 2rem 2rem",
        lineHeight: 2,
    },

}))

export default Item;