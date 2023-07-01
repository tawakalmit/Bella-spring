import React, { useState } from "react";
import { Link } from "react-router-dom";
// import NavLinks from "./Navlinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const logo = "https://bellaspringbed.co.id/themes/custom/jango_sub/logo.png";
  return (
    <nav className="bg-slate-100">
      <div className="flex items-center font-normal justify-around">
        <div className="z-50 p-3 md:w-auto w-full flex justify-between">
          <img src={logo} alt="logo" className="md:cursor-pointer" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-[#2e3192] hover:opacity-30 transition duration-300 ease-in-out"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#3a3f45] hover:opacity-30 transition duration-300 ease-in-out"
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#3a3f45] hover:opacity-30 transition duration-300 ease-in-out"
            >
              Toko
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#3a3f45] hover:opacity-30 transition duration-300 ease-in-out"
            >
              Produk
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#3a3f45] hover:opacity-30 transition duration-300 ease-in-out"
            >
              Info
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#3a3f45] hover:opacity-30 transition duration-300 ease-in-out"
            >
              Berita
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[#3a3f45] hover:opacity-30 transition duration-300 ease-in-out"
            >
              Kontak
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          {/* <NavLinks /> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
