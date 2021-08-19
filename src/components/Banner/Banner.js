import React, { Component } from "react";
import { makeStyles, Paper, Typography } from '@material-ui/core'
import BannerPng from "../Banner/Banner.jpg"


const Banner = () => {
    const classes = useStyles()
    return (
        <>
            <Paper variant = "outlined" square elevation={0} className={classes.banner}>
                    <div className={classes.titleContainer}>
                    </div>
            </Paper>
        </>
    )
}



const useStyles = makeStyles ((theme) => ({
    banner: {
        width: "inherit",
        height: "80vh",
        backgroundImage:`url(${BannerPng})`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        color: "#fff",
        position: "relative",
        
    },
    
}))

export default Banner;