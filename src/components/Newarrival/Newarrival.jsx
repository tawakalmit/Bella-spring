import React, { useState, useEffect } from "react";
import { getNewarrival } from "../../service/Newarrival.service";

const Newarrival = () => {
  const [newarrival, setNewarrival] = useState([]);

  useEffect(() => {
    getNewarrival((data) => {
      setNewarrival(data);
    });
  });
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-[#2e3192] text-center text-xl uppercase">
          New Arrival
        </h1>
        <div className="w-[2rem] mx-auto h-[2px] bg-black"></div>
        {newarrival.map((item, index) => (
          <div key={index} className="w-9/12 mx-auto">
            <img
              className="w-full h-full object-cover"
              src={`https://mitworks.my.id/storage/image/${item.image}`}
              alt="new topper.jpg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Newarrival;
