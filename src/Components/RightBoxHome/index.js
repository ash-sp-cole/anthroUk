import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import colorWall from "../../Media/colorWall.png";
import intro from "../../Media/intro.jpg";
import ceiling from "../../Media/ceiling.jpg";
import geothe from "../../Media/geothe.jpg";
import Steiner from "../../Media/frontSteiner.jpg";

class RightBoxHome extends React.Component {
  render() {
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
          <img
            style={{
              height: "500px",
          
              margin: 'auto'
            }}
            src={Steiner}></img>

        </div>
        <div>
          <img
            style={{
              height: "500px",

              margin: 'auto'
            }}
            src={geothe}></img>

        </div>
        <div>
          <img
            style={{
              height: "500px",

              margin: 'auto'
            }}
            src={ceiling}></img>

        </div>


      </Slider>
    );
  }
}

export default RightBoxHome;