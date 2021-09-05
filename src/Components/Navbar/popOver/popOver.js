import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from "react-router-dom"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Container } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { doLogout } from '../../../Redux/Actions/LoginAction';
import "./popOver.css"
import toast, { Toaster } from 'react-hot-toast';
const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    root: {
        // width: 280,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimplePopover() {
    const history = useHistory();
    const dispatch = useDispatch()
    const [ArrowDirection, setArrowDirection] = React.useState(<KeyboardArrowUpIcon fontSize="large"/>)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const doUserLogout = () => {
        dispatch(doLogout());
        history.push("/");

    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setArrowDirection(<KeyboardArrowDownIcon fontSize="large"/>)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setArrowDirection(<KeyboardArrowUpIcon fontSize="large"/>)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        
        <>
            <Link className="profile"   onClick={handleClick}><AccountCircleIcon fontSize="large" />{ArrowDirection}</Link>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}

            >
                <Container style={{ padding: 10, backgroundColor: "white", width: 300 }} >

                    <div >

                        <List component="nav" aria-label="main mailbox folders" >
                           <Link to="/"  className="ListLinks">
                           <ListItem style={{marginTop:-110}}  button>
                                <div>
                                    <AccountCircleIcon style={{ fontSize: 80 }} />

                                </div>
                                <div >
                                    <Typography>
                                        Name of user
                                    </Typography>
                                </div>
                            </ListItem>
                           </Link>
                             <Divider />
                            <Link to="/SellingForm" className="ListLinks">
                                <ListItem button>
                                    <ListItemIcon>
                                        <PhotoCameraIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Orders" />
                                </ListItem>
                            </Link>
                            <Link to="/SellingAds" className="ListLinks">
                                <ListItem button>
                                    <ListItemIcon>
                                        <NotesIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Favorites" />
                                </ListItem>
                            </Link>
                            <Divider />
                           <Link className="ListLinks">
                           <ListItem button onClick={doUserLogout}>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Logout"  />
                            </ListItem>
                           </Link>
                        </List>
                    </div>
                </Container>

            </Popover>
        </>
    );
}
