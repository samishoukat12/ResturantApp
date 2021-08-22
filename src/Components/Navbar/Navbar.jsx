import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Container, Grid, Hidden } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Navbar.css"
import { Link } from "react-router-dom"
import HomePage from '../../Modules/HomePage/HomePage';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        // marginRight: theme.spacing(2),
        color: "Black"
    },
    title: {
        flexGrow: 1,
        color: "Black"

    },
    color: {
        backgroundColor: "#e22335",
        height: 70
        //   boxShadow:"none"
    }

}));

export default function Navbar() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)

    const classes = useStyles();

    return (
        <div >
            <Grid container>


                <AppBar className={classes.color} position="relative">

                    <Toolbar>
                        <Grid item xs={1}>
                            <Hidden smUp implementation="css">
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h6" className={classes.title}>
                                <Link href="#" className="Link">
                                    DummyName
                                    <FastfoodIcon style={{ paddingLeft: 8 }} fontSize="large" />
                                </Link>
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Hidden xsDown implementation="css">
{
                                authState ?
                                (<div>   <Link className="button" to="/HomePage">Home</Link></div>)
                                :
                                (<div>   <Link href="#" className="button">EN</Link>
                                    <Link to="/login" className="button" >Login<AccountCircleIcon className="ButtonIcon" />
                                    </Link></div>)
                                }
                                {/* <Link href="#" className="cartButton"><ShoppingCartIcon/></Link> */}
                            </Hidden>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>


        </div>
    );
}
