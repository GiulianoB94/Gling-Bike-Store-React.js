import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {Card} from 'react-bootstrap'; 


const Item = ({name,price,color,stock,img,imgbs,id,frame}) => {
    const classes = useStyles()

    return(
            <div className={classes.item}>
                <Link to={`/${name}/${id}`} className={classes.Link}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Card.Title style={{fontFamily: 'Signika'}}>{name}</Card.Title>
                            <Card.Title >{price}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>  
            </div>
    )
}



const useStyles = makeStyles ((theme) => ({
    item: {
        margin: "4rem 2rem 2rem 2rem",
        lineHeight: 2,
    },

    Link: {
        textDecoration: "none"
    }

}))

export default Item;