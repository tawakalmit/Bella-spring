import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Info = () => {
  return (
    <Layout>
      <h1 className="font-normal text-[#949494] text-center text-2xl uppercase py-10 bg-[#F7F6F7]">
        Info
      </h1>
      <div className="mx-32 grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
        <div className="h-[13rem] bg-[#f1f1f1]">
          <div className="w-full h-[10rem]">
            <Link to="https://bellaspringbed.co.id/web/career">
              <img
                className="w-full h-full object-cover"
                src="https://bellaspringbed.co.id/sites/default/files/CAREER%20BANER.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="h-[3rem] font-bold text-lg lg:text-sm xl:text-lg uppercase text-[#2e3192] flex items-center justify-center hover:bg-[#2e3192] hover:text-white">
            Career
          </div>
        </div>
        <div className="h-[13rem] bg-[#f1f1f1]">
          <div className="w-full h-[10rem]">
            <Link to="https://bellaspringbed.co.id/web/download">
              <img
                className="w-full h-full object-cover"
                src="https://bellaspringbed.co.id/sites/default/files/DONWLOAD%20BANER.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="h-[3rem] font-bold text-lg lg:text-sm xl:text-lg uppercase text-[#2e3192] flex items-center justify-center hover:bg-[#2e3192] hover:text-white">
            Download
          </div>
        </div>
        <div className="h-[13rem] bg-[#f1f1f1]">
          <div className="w-full h-[10rem]">
            <Link to="https://bellaspringbed.co.id/web/faq">
              <img
                className="w-full h-full object-cover"
                src="https://bellaspringbed.co.id/sites/default/files/FAQ_0.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="h-[3rem] font-bold text-lg lg:text-sm xl:text-lg uppercase text-[#2e3192] flex items-center justify-center hover:bg-[#2e3192] hover:text-white">
            FAQ
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Info;
