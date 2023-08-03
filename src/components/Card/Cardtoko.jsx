import React from "react";
import { store } from "../../util/dummy/Toko.json";

const Cardtoko = () => {
  return (
    <>
      {store.map((item) => (
        <div
          key={item.id}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.description}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.sosial}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.onlinestore}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.number}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.address}
          </p>
        </div>
      ))}
    </>
  );
};

export default Cardtoko;
