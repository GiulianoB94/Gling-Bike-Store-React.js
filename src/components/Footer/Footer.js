import React, { Component } from "react"
import { makeStyles } from '@material-ui/core';
import facebook from "../Footer/facebook.png"
import twitter from "../Footer/twitter.png"
import youtube from "../Footer/youtube.png"
import pinterest from "../Footer/pinterest.png"
import instagram from "../Footer/instagram.png"

const Footer = () => {
    const classes = useStyles()
    return (
        <>
        <div className= {classes.contFooter}>
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
                <p className={classes.footp}>SUSCRIBE FOR UPDATES</p>
                <div className={classes.cont}>
                <input className={classes.email} type="text" value="Enter your email here" ></input>
                <input className={classes.input} type="submit" value="Send"></input>
                </div>
                <p className={classes.footcop}>©2021 by Giuliano Bondi. All rights reserved</p>
            </div>
        </div>    
        </>
    )
}

const useStyles = makeStyles ((theme) => ({

    contFooter: {
        marginTop: "100%"
    },

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
