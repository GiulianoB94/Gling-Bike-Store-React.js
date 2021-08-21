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
    <Nav>
      <Nav.Link className={classes.Link} href="#home">HOME</Nav.Link>
      <Nav.Link className={classes.Link} href="#features">SHOP</Nav.Link>
      <Nav.Link className={classes.Link} href="#pricing">CONTACT</Nav.Link>
      <Nav.Link className={classes.cart} href="#pricing"><LocalMallIcon fontSize="large" color="primary" /></Nav.Link>
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

    Link: {
        color:  "#c59650",
        fontFamily: 'Signika',
        fontSize: 20        
    },

    cart: {
        marginLeft: "20%",
        marginTop: "-6px",
    }

}))




export default NavBar


