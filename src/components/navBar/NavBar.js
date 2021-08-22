import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Navbar,Nav, Container,   } from 'react-bootstrap';


const NavBar = () => {
    const classes = useStyles()
    return (
        <>
  <Navbar fixed="top" bg="white"  >
    <Container>
    <Navbar.Brand href="#home">
        <div className={classes.LogoCont}>
            <p className={classes.Logo}>Gling</p>
            <p className={classes.Subt}>Urban Bikes</p>
        </div>
    </Navbar.Brand>
    <Nav className={classes.SectCont}>
     <Link to="/" className={classes.Link}>HOME</Link>
     <Link to="/categories" className={classes.Link}>CATEGORIES</Link>
      <Nav.Link className={classes.cart}><LocalMallIcon fontSize="large" color="primary" /></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    )
}



       
const useStyles = makeStyles ((theme) => ({

    LogoCont: {
        display: "flex"
    },


    Logo: {
        fontFamily: 'Satisfy',
        color: "#24476e",
        fontSize: 70
    },

    Subt: {
        marginTop: "25%",
        fontSize: 22,
        fontFamily: 'Signika',
        color:  "#c59650",
    },


    SectCont: {
        margin: "auto",
        paddingLeft: "35%"
    },

    Link: {
        color:  "#c59650",
        fontFamily: 'Signika',
        fontSize: 20 ,
        textDecoration: "none" ,
        marginRight: "15%",
        letterSpacing: 1     
    },

    cart: {
        marginLeft: "0%",
        marginTop: "-15px",
    }

}))




export default NavBar


