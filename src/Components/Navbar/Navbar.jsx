import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Divider, Drawer, Grid, Hidden, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import "./Navbar.css"
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import NotesIcon from '@material-ui/icons/Notes';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link,useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import SimplePopover from './popOver/popOver';
import { doLogout } from '../../Redux/Actions/LoginAction';


const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
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
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },

    // necessary for content to be below app bar
    toolbar: theme,
    drawerPaper: {
        width: drawerWidth,
    },
    grow: {
        flexGrow: 1,
    },

    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(0),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "auto",
        height: "40px",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },

}));

export default function Navbar(props) {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)

    const classes = useStyles();
const history=useHistory()
    const { window } = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch()
    const doUserLogout = () => {
        dispatch(doLogout());
        history.push("/");

    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
          <List>
              <ListItem className="DrawerName">
                  DummyResturent
                  <FastfoodIcon style={{ paddingLeft: 8 }} fontSize="large" />
              </ListItem>
          </List>
          {
              authState?
              <List component="nav" aria-label="main mailbox folders" >
              <Link to="/"  className="ListLinks">
              <ListItem  button>
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
              :
              <>
             <List>
             <Link to="/login" className="ListLinks" style={{paddingTop:40}}>
                   <ListItem button>
                       <ListItemIcon>
                           <AccountCircleIcon />
                       </ListItemIcon>
                       <ListItemText primary="Login" />
                   </ListItem>
               </Link>
               </List>
            
            </>
          }

            <Divider />
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div >
            <Grid container>


                <AppBar className={classes.color} position="relative">

                    <Toolbar>
                        <Grid item xs={1}>
                            <Hidden mdUp implementation="css">
                                <IconButton edge="start" className={classes.menuButton} style={{color:"white"}}
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}>
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h6" className={classes.title}>
                                <Link to="/" className="Link">
                                    DummyName
                                    <FastfoodIcon style={{ paddingLeft: 8 }} fontSize="large" />
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Hidden smDown implementation="css">
                                <Link href="#" className="button">EN</Link>
                            </Hidden>
                        </Grid>

                        <Grid item xs={1}>
                            <Hidden smDown implementation="css">

                                {
                                    authState ?

                                        <SimplePopover />
                                        :
                                        <Link to="/login" className="button1"    >Login<AccountCircleIcon className="ButtonIcon" />
                                        </Link>
                                }
                            </Hidden>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden sm implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={open}
                        onClose={handleDrawerClose}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xlDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>


        </div>
    );
}
