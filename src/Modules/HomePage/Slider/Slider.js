import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useState, useEffect } from "react";
// import "./Carousel.css";
import { PongSpinner, WaveSpinner } from "react-spinners-kit";
import { useSlider } from "./useSlider";
import "./Slider.css"
import { Image } from "react-bootstrap";


export default function CarouselSlider(props) {
  const [Loading,SliderImage] = useSlider();
  if (Loading) {
    return (
      <div>
        {/* <center>
        <PongSpinner color="#e22335" size="100"/>
        </center> */}
         <center>
        <Skeleton variant="rect" width={1300} height={500} />
      </center>
      </div>
    );
  }

  return (
    <Carousel
    animation="slide"
    timeout={800}
    swipe="boolean"
    fullHeightHover="boolean"
    indicators="false">
        {
            SliderImage.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
)
}

function Item(props)
{
  const[Loading]=useSlider()
  if (Loading) {
    return (
      <center>
        <Skeleton variant="rect" width={1300} height={500} />
      </center>
    );
  }
return (
    <Paper>
    <center>
    <Image src={props.item.img} className="sliderImage"  alt="broken-img"/>
</center>       

      
    </Paper>
)
}
