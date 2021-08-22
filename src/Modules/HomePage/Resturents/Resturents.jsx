import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import KFC from "../../../Assets/Kfc/KFC.png"
import burgerKing from "../../../Assets/Kfc/burgerKing.png"
import pizzahut from "../../../Assets/Kfc/pizzahut.png"
import moc from "../../../Assets/Kfc/mac.png"
import Hardees from "../../../Assets/Kfc/Hardees.svg"
import whiteCastle from "../../../Assets/Kfc/whiteCastle.png"
import dominos from "../../../Assets/Kfc/dominos.jpg"
import DocSaucy from "../../../Assets/Kfc/Drs.jpg"
import { Badge, Container, Grid, Link, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./Resturents.css"
import { CardGroup } from 'react-bootstrap';
import WidgetsIcon from '@material-ui/icons/Widgets';



export default function Resturents() {


    return (
        <>
        <Container style={{marginTop:70}}>
           <Typography className="listRes"> Lists Of Resturents <WidgetsIcon fontSize="large" style={{paddingLeft:10}}/></Typography>
        </Container>
            <Container>
           <div className="row">
           <CardGroup>
               <div className="column">
               <Grid item xs={3}>
               <Badge badgeContent="30% OFF" color="secondary"  >
               <Link href="#" className="cards">
                   <Card style={{ width: '18rem' }} className="cardsBorder">
                       <center> <Card.Img variant="top" src={KFC} className="zoom" /></center>
                        <Card.Body>
                            <Card.Title className="cardsTitle">KFC</Card.Title>
                            <Card.Text className="cardsDetails">
                            Get 9 Pcs Hot & Crispy Chicken for JUST Rs. 1250. KFC 
                            <br/>
                            Hurry Up!!! Get It Now.                           </Card.Text>
                            <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                        </Card.Body>
                    </Card>
                   </Link>
                   </Badge>
                </Grid>
               </div>
               <div className="column">
               <Grid item xs={3}>
               <Link href="#" className="cards">
                   <Card style={{ width: '18rem' }} className="cardsBorder">
                       <center> <Card.Img variant="top" src={burgerKing} className="zoom" /></center>
                        <Card.Body>
                            <Card.Title className="cardsTitle">burger King</Card.Title>
                            <Card.Text className="cardsDetails">
                            Get access to exclusive coupons. Discover our menu and order delivery or pick up from a Burger King near you
                            </Card.Text>
                            <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                        </Card.Body>
                    </Card>
                   </Link>
                </Grid>
               </div>
               <div className="column">
               <Grid item xs={3}>
                   <Link href="#" className="cards">
                   <Card style={{ width: '18rem' }} className="cardsBorder">
                       <center> <Card.Img variant="top" src={pizzahut} className="zoom" /></center>
                        <Card.Body>
                            <Card.Title  className="cardsTitle">Pizza Hut</Card.Title>
                            <Card.Text className="cardsDetails">
                            Treat yourself to the best pizza, sides and desserts from your nearest Pizza Hut. Get delivery or takeaway today.
                            </Card.Text>
                            <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                        </Card.Body>
                    </Card>
                   </Link>
                </Grid>
               </div>
               <div className="column">
               <Grid item xs={3}>
               <Link href="#" className="cards">
                   <Card style={{ width: '18rem' }} className="cardsBorder">
                       <center> <Card.Img variant="top" src={Hardees} className="zoom" /></center>
                        <Card.Body>
                            <Card.Title className="cardsTitle">Hardees</Card.Title>
                            <Card.Text className="cardsDetails">
                            Hardees has got an amazing range of fast-food products for you to endeavor with your loved ones.
                            </Card.Text>
                           <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                        </Card.Body>
                    </Card>
                   </Link>
                </Grid>
               </div>
               <div className="column">
               <Grid item xs={3}>
               <Link href="#" className="cards">
                   <Card style={{ width: '18rem' }} className="cardsBorder">
                       <center> <Card.Img variant="top" src={moc} className="zoom" /></center>
                        <Card.Body>
                            <Card.Title className="cardsTitle">McDonald's</Card.Title>
                            <Card.Text className="cardsDetails">
                            The Saweetie Meal just dropped and it's our icy-est collab yet—a Big Mac®, 4 piece Chicken McNuggets®, medium Fries. 
                            </Card.Text>
                            <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                        </Card.Body>
                    </Card>
                   </Link>
                </Grid>
               </div>
               <div className="column">
               <Grid item xs={3}>
               <Link href="#" className="cards">
                   <Card style={{ width: '18rem' }} className="cardsBorder">
                       <center> <Card.Img variant="top" src={whiteCastle} className="zoom" /></center>
                        <Card.Body>
                            <Card.Title className="cardsTitle">White Castle</Card.Title>
                            <Card.Text className="cardsDetails">
                            Never miss another deal. Get the top deals from 100s of retailers, including White Castle®
                            </Card.Text>
                            <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                        </Card.Body>
                    </Card>
                   </Link>
                </Grid>
               </div>
               <div className="column">
               <Grid item xs={3}>
                   <Link href="#" className="cards">
                   <Card style={{ width: '18rem' }} className="cardsBorder">
                       <center> <Card.Img variant="top" src={dominos} className="zoom" /></center>
                        <Card.Body>
                            <Card.Title  className="cardsTitle">Domino's Pizza</Card.Title>
                            <Card.Text className="cardsDetails">
                            Order pizza, pasta, sandwiches & more online for carryout or delivery from Domino's.
                            </Card.Text>
                            <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                        </Card.Body>
                    </Card>
                   </Link>
                </Grid>
               </div>
               <div className="column">
               <Grid item xs={3}>
               <Link href="#" className="cards">
                   <Card style={{ width: '18rem' }} className="cardsBorder">
                       <center> <Card.Img variant="top" src={DocSaucy} className="zoom" /></center>
                        <Card.Body>
                            <Card.Title className="cardsTitle">Doctor Saucy</Card.Title>
                            <Card.Text className="cardsDetails">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                           <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                        </Card.Body>
                    </Card>
                   </Link>
                </Grid>
               </div>
                </CardGroup>
           </div>
            </Container>
        </>
    );
}
