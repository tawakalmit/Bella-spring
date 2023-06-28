import React from "react";
import Slider from "react-slick";

const Heroslider = (props) => {
  const { image_banner } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src={`https://mitworks.my.id/storage/image_banner/${image_banner}`}
            alt=""
          />
        </div>
      </Slider>
    </>
  );
};

export default Heroslider;
