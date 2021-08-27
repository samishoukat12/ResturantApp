import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import { Badge, Container, Grid, Hidden, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from "react-router-dom"
import "./Resturents.css"
import { CardGroup } from 'react-bootstrap';
import WidgetsIcon from '@material-ui/icons/Widgets';
import {useResturents} from "./useResturents"
import { PongSpinner  } from "react-spinners-kit";
import { Skeleton } from '@material-ui/lab';
import { useSelector } from 'react-redux';
export default function Resturents() {
   
const [Loading,Resturents,handleLoading] = useResturents()
const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
return (
        <>
        <Container style={{marginTop:70}}>
           <Typography className="listRes"> Lists Of Resturents <WidgetsIcon fontSize="large" style={{paddingLeft:10}}/></Typography>
        </Container>
            <Container>
           <div className="row" >
           <CardGroup>
              
             <div>
                 {
                     Loading? 
                 <center>
                        <PongSpinner color="#e22335" size="100"/>
                 </center>
                     :
                     Resturents.map((items)=>{
                        return(
                          <>
                       
                           {
                             authState?
                             <div className="column">
                             <Grid item >
                             <Badge badgeContent={items.discount}color="secondary"  >
                             <Link to="/orderForm" className="cards">
                                 <Card style={{ width: '18rem' }} className="cardsBorder">
                                        <center> <Items variant="top" items={items}/></center>
                                      <Card.Body>
                                          <Card.Title className="cardsTitle">{items.name}</Card.Title>
                                          <Card.Text className="cardsDetails">
                                         {items.description}                     </Card.Text>
                                          <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                                      </Card.Body>
                                  </Card>
                                 </Link>
                                 </Badge>
                              </Grid>
                             </div>
                             :
                             <div className="column">
                             <Grid item >
                             <Badge badgeContent={items.discount}color="secondary"  >
                             <Link to="/login" className="cards">
                                 <Card style={{ width: '18rem' }} className="cardsBorder">
                                        <center> <Items variant="top" items={items}/></center>
                                      <Card.Body>
                                          <Card.Title className="cardsTitle">{items.name}</Card.Title>
                                          <Card.Text className="cardsDetails">
                                         {items.description}                     </Card.Text>
                                          <div className="ButtonPadding"> <Button className="cardsButton">Order Now<ArrowForwardIcon/></Button></div>
                                      </Card.Body>
                                  </Card>
                                 </Link>
                                 </Badge>
                              </Grid>
                             </div>
                           }
                        
                         
                        </>
                        )
                    })
                 }
             </div>
                </CardGroup>
           </div>
            </Container>
        </>
    );
}
function Items(props)
{
    const [Loading,Resturents,handleLoading] = useResturents()
    if (Loading) {
    return (
      <center>
        <Skeleton variant="rect" height={200} width={234} />
      </center>
    );
  }
return (
   
   
    <Card.Img src={props.items.img} className="zoom"  alt="broken-img"/>      
)
}
