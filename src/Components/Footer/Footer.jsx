import { Divider, Grid, Link, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import React from 'react'
import { Container } from 'react-bootstrap'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./Footer.css"
export default function Footer() {
    return (
        <div>
            <Container className="container" >
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Typography className="topcities">TOP CITIES</Typography>
                        <ul className="list">

                            <li className="listCities">Islamabad</li>
                            <li className="listCities">Lahore</li>
                            <li className="listCities">Karachi</li>
                            <li className="listCities">Faisalabad</li>
                            <li className="listCities">Sialkot</li>
                            <li className="listCities">Multan</li>

                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <ul className="list" style={{ paddingTop: 55 }}>

                            <li className="listCities">Rawalpindi</li>
                            <li className="listCities">Gujranwala</li>
                            <li className="listCities">Hyderabad</li>
                            <li className="listCities">Peshawar</li>
                            <li className="listCities">Quetta</li>
                            <li className="listCities">Sargodha</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Typography className="topcities">PARTNERS</Typography>
                        <ul className="list">

                            <li className="listCities">Macdonals</li>
                            <li className="listCities">Dominos</li>
                            <li className="listCities">Pizza Hut</li>
                            <li className="listCities">Sariyas</li>
                            <li className="listCities">Hardees</li>
                            <li className="listCities">Burger King</li>
                            <li className="listCities">Doctor Saucy</li>


                        </ul>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <ul className="list" style={{ paddingTop: 55 }}>


                        </ul>
                    </Grid>
                </Grid>
                <Grid container className="FooterDivider">
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Typography className="topcities">GET TO KNOW US</Typography>
                        <ul className="list">

                            <li className="listCities">About us</li>
                            <li className="listCities">Careers</li>
                            <li className="listCities">Blog</li>
                            <li className="listCities">Design Bounty</li>
                            <li className="listCities">Gift Cards</li>
                            <li className="listCities">Cheetay Stories</li>
                            <li className="listCities">Our award-winning content</li>
                            <li className="listCities">API Docs</li>

                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                        <Typography className="topcities">SUPPORT</Typography>
                        <ul className="list" >

                            <li className="listCities">Account Details</li>
                            <li className="listCities">Order History</li>
                            <li className="listCities">Customer Help</li>
                            <li className="listCities">Fleet Help</li>
                            <li className="listCities">Vendor Help</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Typography className="topcities">PARTNERS</Typography>
                        <ul className="list">

                            <li className="listCities">Become a Partner Restaurant</li>
                            <li className="listCities">Get Cheetay for Deliveries</li>
                            <li className="listCities">Advertise with Cheetay</li>


                        </ul>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Typography className="topcities">DELIVERY FLEET</Typography>
                        <ul className="list" >
                            <li className="listCities">Join the Cheetay Fleet</li>

                        </ul>
                    </Grid>
                </Grid>
               <Container>
                   
               <Grid container className="FooterDivider" style={{paddingTop:20}}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  >
                     <Link href="#" className="FooterBrand" >@DUMMY RESTURENT</Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  >
                        <center>
                        <Link href="#" className="FooterLinks">Terms & Conditions </Link>
                        <span className="FooterLinks">|</span>
                        <Link href="#" className="FooterLinks" style={{paddingLeft:5}}>Privacy Policy</Link>
                        </center>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}   >
                        <div className="divButton">
                        <Button className="FooterButton"><FacebookIcon /></Button>
                        <Button className="FooterButton"><TwitterIcon /></Button>
                        <Button className="FooterButton"><InstagramIcon /></Button> 
                        </div>
                        
                    </Grid>
                </Grid>
               </Container>
            </Container>
        </div>
    )
}
