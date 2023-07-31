import React from "react";
import Layout from "../components/Layout/Layout";

const Produk = () => {
  return (
    <Layout>
      <div>
        <h1 className="font-normal text-[#949494] text-center text-2xl uppercase py-10 bg-[#F7F6F7]">
          Produk
        </h1>
        <div className="flex justify-center item-center mt-5">
          <div>
            <h1 className="text-center text-[#3f444a] text-2xl uppercase font-bold">
              Bed
            </h1>
            <img
              src="https://bellaspringbed.co.id/sites/default/files/bed.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center mx-28 mt-5">
          <img
            src="https://bellaspringbed.co.id/sites/default/files/perfect%20comfort_1.jpg"
            alt=""
            className="w-[350px] h-[233px]"
          />
          <img
            src="https://bellaspringbed.co.id/sites/default/files/Essential%20Comfort_2.jpg"
            alt=""
            className="w-[350px] h-[233px]"
          />
          <img
            src="https://bellaspringbed.co.id/sites/default/files/Orthopedic_1.jpg"
            alt=""
            className="w-[350px] h-[233px]"
          />
        </div>

        <div className="flex justify-center item-center mt-10">
          <div>
            <h1 className="text-center text-[#3f444a] text-2xl uppercase font-bold">
              Multi Bed
            </h1>
            <img
              src="https://bellaspringbed.co.id/sites/default/files/multibed_0.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center mx-28 mt-5">
          <img
            src="https://bellaspringbed.co.id/sites/default/files/multibed%20bed_0.jpg"
            alt=""
            className="w-[350px] h-[233px]"
          />
          <img
            src="https://bellaspringbed.co.id/sites/default/files/2in1_0.jpg"
            alt=""
            className="w-[350px] h-[233px]"
          />
          <img
            src="https://bellaspringbed.co.id/sites/default/files/kids_0.jpg"
            alt=""
            className="w-[350px] h-[233px]"
          />
        </div>

        <div className="flex justify-center item-center mt-10">
          <div>
            <h1 className="text-center text-[#3f444a] text-2xl uppercase font-bold">
              Accessories
            </h1>
            <img
              src="https://bellaspringbed.co.id/sites/default/files/accessories.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center mx-28 mt-5 mb-20">
          <img
            src="https://bellaspringbed.co.id/sites/default/files/TOPPER.jpg"
            alt=""
            className="w-[350px] h-[233px]"
          />
          <img
            src="https://bellaspringbed.co.id/sites/default/files/BEDSHET.jpg"
            alt=""
            className="w-[350px] h-[233px]"
          />
          <img
            src="https://bellaspringbed.co.id/sites/default/files/pillow.jpg"
            alt=""
            className="w-[350px] h-[233px]"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Produk;
