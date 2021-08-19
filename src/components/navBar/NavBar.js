import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
// import LocalMallIcon from '@material-ui/icons/LocalMall';



const NavBar = () => {
    const classes = useStyles()
    return (
        <header className={classes.header}> 
           <h1 className={classes.Logo}><strong>Gling</strong> <h3 style={{display: "inline", fontSize: 15, fontFamily: 'Signika',color: "#c59650",}} >URBAN BIKES</h3></h1>
                <nav className={classes.nav}>
                    <ul className={classes.ul}>
                    <Link to="/Home"><li>Home</li></Link>
                    <Link to="/Shop"><li>Shop</li></Link>
                    <Link to="/Contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </header>  
    )

}



       
const useStyles = makeStyles ((theme) => ({
    header: {
        background: "#fff",
        width: "100%",
        height: 110,
        position: "fixed",
        zIndex: "100"
    },

    nav: {
        display: "flex",
        float: "right",
        marginBottom: 10,
    },

    Logo: {
        marginBottom: -100,
        marginTop: 9,
        fontFamily: 'Satisfy',
        color: "#24476e",
        fontSize: 70

    },


    ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        overflow: "hidden",
    },

    li: {

        display: "inline-block",
        Float: "right",
        textAlign: "center",
        marginRight: 30,
    },

    
    a: {
        fontSize: 15,
        fontFamily: 'Signika',
        display: "block",
        padding: 3,
        marginRight: 80,
        marginTop: 40,
        color: "#24476e",
        textDecoration: "none"
    },
    
    menubar: {
        fontSize: 15,
        fontFamily: 'Signika',
        display: "block",
        padding: 10,
        marginRight: 80,
        marginTop: 40,
        color: "#c59650",
        textDecoration: "none"
    },
}))




export default NavBar