import react, { Component } from 'react';
import { makeStyles } from '@material-ui/core';


const Layout = ({children}) => {
    const classes = useStyles()
    return (
        <div className= {classes.root}>
            {children}
        </div>
    )
}



const useStyles = makeStyles ((theme) => ({
    root: {
        display: "flex", 
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        margin: theme.spacing(0),
    }
    
}))

export default Layout;