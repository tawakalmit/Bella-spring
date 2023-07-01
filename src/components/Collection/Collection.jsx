import React, { useState, useEffect } from "react";
import { getCollection } from "../../service/Collection.service";

const Collection = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    getCollection((data) => {
      setCollection(data);
    });
  });
  return (
    <>
      <section className="my-20">
        <h1 className="font-bold text-[#2e3192] text-center text-xl uppercase">
          Our Collections
        </h1>
        <div className="w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
          {collection.map((item, index) => (
            <div key={index} className="h-[13rem] bg-[#f1f1f1]">
              <div className="w-full h-[10rem]">
                <img
                  className="w-full h-full object-cover"
                  src={`https://mitworks.my.id/storage/image/${item.image}`}
                  alt={item.title}
                />
              </div>
              <div className="h-[3rem] font-bold text-lg lg:text-sm xl:text-lg uppercase text-[#2e3192] flex items-center justify-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Collection;
{
  /* <section className="w-9/12 mx-auto bg-[#f7f7f7] min-h-[20rem] p-10">
        <h1 className="font-bold text-[#2e3192] text-center text-xl uppercase">
          Customer Reviews
        </h1>
        <div className="w-[2rem] mx-auto h-[3px] bg-white mt-3"></div>
        <p className="text-sm text-center opacity-50 my-5">
          Konsumen kami adalah fokus utama kami. Berikut ini apa yang mereka
          katakan tentang kami.
        </p>
        <div className="swiper swiper-initialized swiper-horizontal mySwiper mt-10 swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            style="transform: translate3d(-239.333px, 0px, 0px); transition-duration: 0ms;"
          >
            <div
              className="bg-black grid grid-cols-3 gap-4"
              style="width: 209.333px; margin-right: 30px;"
            >
              <div className="h-[25rem] bg-[#f7f7f7]">
                <div className="w-full h-[13rem] bg-white text-sm p-10 pb-20 relative">
                  <p className="opacity-50">
                    Hunting springbed pilihan jatuh ke Bella Springbed, pegasnya
                    kuat, mattressnya lembut dan banyak promonya.
                  </p>
                  <div className="triangle-down absolute -bottom-5"></div>
                </div>
                <div className="mt-10 w-10/12 mx-auto flex items-center gap-5">
                  <img
                    src="https://mitworks.my.id/storage/avatar/hp indah sulistyowati_0.png"
                    alt="https://mitworks.my.id/storage/avatar/hp indah sulistyowati_0.png"
                    className="!w-[5rem] !h-[5rem]"
                  />
                  <div className="">
                    <h1 className="uppercase text-[#5c6873] text-sm text-left">
                      Indah Sulistyowati
                    </h1>
                    <p className="text-left text-[#2e3192] text-sm">
                      Bella Springbed Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
