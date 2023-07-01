import React, { useState, useEffect } from "react";
import { getSubbanner } from "../../service/Subbanner.service";

const Subbanner = () => {
  const [subbanner, setSubbanner] = useState([]);

  useEffect(() => {
    getSubbanner((data) => {
      setSubbanner(data);
    });
  });

  return (
    <>
      <section className="w-full my-20">
        <div className="w-9/12 mx-auto flex flex-col lg:flex-row justify-center gap-20">
          {subbanner.map((item, index) => (
            <div key={index} className="w-full lg:w-3/12 flex flex-col gap-2">
              <section className="h-fit flex flex-col gap-5 items-center justify-between">
                <div className="w-[4rem]">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://mitworks.my.id/storage/icon/${item.icon}`}
                    alt=""
                  />
                </div>
                <p className="text-[#2e3192] font-bold text-md xl:text-lg text-center">
                  {item.title}
                </p>
              </section>
              <p className="text-center opacity-60 text-sm leading-6 tracking-wider">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      ;
    </>
  );
};

export default Subbanner;
