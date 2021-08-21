import React, { Component } from "react"
import { CardContent, makeStyles } from '@material-ui/core';
import facebook from "../Footer/facebook.png"
import twitter from "../Footer/twitter.png"
import youtube from "../Footer/youtube.png"
import pinterest from "../Footer/pinterest.png"
import instagram from "../Footer/instagram.png"
import {Card, Button,InputGroup, FormControl} from 'react-bootstrap'; 

const Footer = () => {
    const classes = useStyles()
    return (
        <>

<Card className= {classes.contFooter}>
            <div className={classes.media}>
                <ul className={classes.ul}>
                    <li className={classes.li}><a href="#"><img className={classes.img} src={facebook}/></a></li>
                    <li className={classes.li}><a href="#"><img className={classes.img} src={twitter}/></a></li>
                    <li className={classes.li}><a href="#"><img className={classes.img} src={youtube}/></a></li>
                    <li className={classes.li}><a href="#"><img className={classes.img} src={pinterest}/></a></li> 
                    <li className={classes.li}><a href="#"><img className={classes.img} src={instagram}/></a></li> 
                </ul>   
            </div>
            <div className={classes.footer}>
                <div className={classes.cont}>
                <p className={classes.footp}>SUSCRIBE FOR UPDATES</p>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Your Email here.."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                    Send
                    </Button>
                </InputGroup>
                </div>
                <p className={classes.footcop}>©2021 by Giuliano Bondi. All rights reserved</p>
            </div>
        </Card> 


         
 
        </>
    )
}

const useStyles = makeStyles ((theme) => ({

    media: {
        backgroundColor: "#b99867",
        height: 100
        
       
    },

    ul: {
        marginTop: 20,
        padding: 0,
        listStyle: "none",
        overflow: "hidden",
        textAlign: "center"
    },

    li: {
        
        display: "inline",
        marginRight: 30,
        
    },

    img: {
        width: 50,
        height: 50,
    },

    footer: {
        backgroundColor: "#294057",
       
    },

    footp : {
        color: "#fff",
        fontFamily: 'Signika',
        fontSize: 16,
        textAlign: "center",
        marginTop: -20
        
    },

    cont: {
        marginTop: "5%",
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10 ,
    },

    email: {
        display: "inline-block",
        width:600,
        marginLeft: 130,
        border: "2px solid #f6f6f6",
        backgroundColor: "#294057",
        color: "#fff",
        textAlign: "center", 
    },

    input: {
        display: "inline-block",
        width: 600,
        marginLeft: 10,
        marginTop: 10,
    },

    footcop: {
        color: "#fff",
        fontFamily: 'Signika',
        fontSize: 16,
        marginTop: 55,
        textAlign: "center"
    }
    
}))



export default Footer;


/*     */