import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import imag from "../../Assets/food.png";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Resturents from "./Resturents/Resturents";
import Image from "react-bootstrap/Image"
import SliderRes from "./Slider/Slider";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import useLogin from "../Login/useLogin";
import "./HomePage.css"

const TEXTS = [
  "FEELING HUNGRY?",
  "WANT FAST FOOD?",
  "WANT SOME COLD DRINK?",
  "THEN ORDER NOW!!",
];


export default function HomePage() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);

  }, []);

  return (
    <>
      
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Container style={{ padding: 110, marginTop: 50 }}>
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
                style={{ color: "#e22335", fontSize: 30 }}
              />
              <Typography
                style={{ color: "#e22335", fontSize: 20, paddingTop: 20 }}
              >
                Food, groceries, fresh milk, medicines, and a lot more...
              </Typography>
              <Button
                style={{
                  color: "#ffffff",
                  backgroundColor: "#e22335",
                  marginTop: 20,
                  padding: 10
                }}
              >
                Order Now
                <ArrowForwardIcon />
              </Button>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Container>
             <Image src={imag}   className="responsive_img"  />
            </Container>
          </Grid>
        </Grid>
      </Container>
      <SliderRes />
      <Resturents />
    </>

  );
}
