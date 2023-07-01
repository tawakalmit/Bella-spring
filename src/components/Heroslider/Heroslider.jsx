import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getBanner } from "../../service/Banner.service";

const Heroslider = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    getBanner((data) => {
      setHero(data);
    });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {hero.map((item, index) => (
          <div key={index}>
            <img
              src={`https://mitworks.my.id/storage/image_banner/${item.image_banner}`}
              alt="image-banner"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Heroslider;
