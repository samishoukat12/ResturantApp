import React from "react";
import Slider from "react-slick";
import KFCSlider from "../../../Assets/Slider/KFCSlider.png"
import pizzahut from "../../../Assets/Slider/pizzahut.jpg"
import dominos from "../../../Assets/Slider/dominos.jfif"
import familyBox from "../../../Assets/Slider/familybox.jfif"
import macdonald from "../../../Assets/Slider/macdonald.jfif"
import "./Slider.css"
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
       <center> <img src={KFCSlider} className="sliderImage" /></center>
      </div>
      <div>
      <center> <img src={pizzahut}  className="sliderImage"/></center>
      </div>
      <div>
      <center> <img src={dominos}  className="sliderImage"/></center>
      </div>
      <div>
      <center> <img src={familyBox}  className="sliderImage"/></center>
      </div>
      <div>
      <center> <img src={macdonald}  className="sliderImage" /></center>
      </div>
      <div>
      <center> <img src={KFCSlider}  className="sliderImage"/></center>
      </div>
    </Slider>
  );
}