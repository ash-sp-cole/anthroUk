import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ceiling from "../../Media/ceiling.jpg";
import geothe from "../../Media/geothe.jpg";
import Steiner from "../../Media/frontSteiner.jpg";

class CenterBoxHome extends React.Component {
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
            src={Steiner}
            alt="error"
            >
              
            </img>

        </div>
        <div>
          <img
            style={{
              height: "500px",

              margin: 'auto'
            }}
            src={geothe}
            alt="error"></img>

        </div>
        <div>
          <img
            style={{
              height: "500px",

              margin: 'auto'
            }}
            src={ceiling}
            alt="error"></img>

        </div>


      </Slider>
    );
  }
}

export default CenterBoxHome;