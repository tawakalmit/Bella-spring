import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getArtikel } from "../../service/Artikel.service";

const Artikel = () => {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    getArtikel((data) => {
      setArtikel(data);
    });
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <>
        <section className="my-20 w-9/12 mx-auto min-h-[25rem] bg-[#F7F6F7] p-10">
          <h1 className="font-bold text-[#2e3192] text-center text-xl uppercase">
            Berita &amp; Artikel
          </h1>
          <div className="w-[2rem] mx-auto h-[3px] bg-white mt-3"></div>
          <div className="">
            <div className="">
              <Slider {...settings}>
                {artikel.map((item, index) => (
                  <div key={index} className="">
                    <a href="/post/bella-aja" className="">
                      <div className="bg-white h-[25rem] mx-3">
                        <div className="w-full h-[13rem]">
                          <img
                            className="w-full h-full object-cover"
                            src={`https://mitworks.my.id/storage/image_headline/${item.image_headline}`}
                          />
                        </div>
                        <div className="p-5 flex flex-col gap-2">
                          <h1 className="uppercase text-[#2c8ec7] text-left line-clamp-3">
                            {item.title}
                          </h1>
                          <p className="line-clamp-4 text-xs text-left">
                            {item.excerpt}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Artikel;
