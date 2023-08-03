import React from "react";
import Layout from "../components/Layout/Layout";
import Cardtoko from "../components/Card/Cardtoko";

const Toko = () => {
  return (
    <Layout>
      <h1 className="font-normal text-[#949494] text-center text-2xl uppercase py-10 bg-[#F7F6F7]">
        Toko
      </h1>
      <div className="flex justify-center mt-5">
        <img
          src="https://bellaspringbed.co.id/sites/default/files/inline-images/STORELOCATION.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-60 mx-32 my-10">
        <label
          for="countries"
          className="block w-full mb-2 text-lg font-normal text-gray-900 dark:text-white"
        >
          Filter berdasarkan Wilayah
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>-Any-</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10 mx-32">
        <Cardtoko />
      </div>
    </Layout>
  );
};

export default Toko;
