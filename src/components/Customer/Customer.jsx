import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getCustomer } from "../../service/Customer.service";

const Customer = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    getCustomer((data) => {
      setCustomer(data);
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
      <section className="w-9/12 mx-auto bg-[#f7f7f7] min-h-[20rem] p-10">
        <h1 className="font-bold text-[#2e3192] text-center text-xl uppercase">
          Customer Reviews
        </h1>
        <div className="w-[2rem] mx-auto h-[3px] bg-white mt-3"></div>
        <p className="text-sm text-center opacity-50 my-5">
          Konsumen kami adalah fokus utama kami. Berikut ini apa yang mereka
          katakan tentang kami.
        </p>

        <Slider {...settings}>
          {customer.map((item, index) => (
            <div className="grid grid-cols-3 gap-4">
              <div key={index} className="h-[25rem] bg-[#f7f7f7] mx-3">
                <div className="w-full h-[13rem] bg-white text-sm p-10 pb-20 relative">
                  <p className="opacity-50">{item.review}</p>
                  <div className="absolute -bottom-5"></div>
                </div>
                <div className="mt-10 w-10/12 mx-auto flex items-center gap-5">
                  <img
                    src={`https://mitworks.my.id/storage/avatar/${item.avatar}`}
                    alt=""
                    className="!w-[5rem] !h-[5rem]"
                  />
                  <div className="">
                    <h1 className="uppercase text-[#5c6873] text-sm text-left">
                      {item.name}
                    </h1>
                    <p className="text-left text-[#2e3192] text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Customer;
