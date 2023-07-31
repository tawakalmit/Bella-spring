import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full min-h-[40rem] bg-[#9e9e9e] text-white flex items-center pt-20 pb-10 lg:pt-0 lg:pb-0">
        <div className="w-9/12 mx-auto flex flex-col justify-center gap-10">
          <div className="w-full flex justify-between flex-col gap-10 lg:gap-0 lg:flex-row">
            <div>
              <h1 className="font-bold text-2xl mb-3">About</h1>
              <div className="w-[2rem] h-[.3rem] bg-white"></div>
              <ul className="flex flex-col mt-5 text-sm font-light leading-7">
                <li>
                  <a href="/tentangkami" className="">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="/berita" className="">
                    Berita
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    Katalog Download
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    Karir
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-2xl mb-3">Our Collection</h1>
              <div className="w-[2rem] h-[.3rem] bg-white"></div>
              <ul className="flex flex-col mt-5 text-md leading-7">
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    Bed
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    Multi Bed
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    2 in 1 Series
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    Mattress Foam
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="router-link-active router-link-exact-active"
                    aria-current="page"
                  >
                    Headboard
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-2xl mb-3">Kontak Kami</h1>
              <div className="w-[2rem] h-[.3rem] bg-white"></div>
              <ul className="flex flex-col mt-5 text-md leading-7">
                <li>Marketing : bellaspringdesign@gmail.com</li>
                <li>Office : Sidoarjo, Jawa Timur</li>
              </ul>
              <div className="mt-3 flex gap-5">
                <a
                  href="/"
                  className="router-link-active router-link-exact-active w-[3rem] h-[3rem] flex items-center justify-center rounded-full border-solid border-[1px] border-white hover:border-[#3c3b89]"
                  aria-current="page"
                >
                  <i className="bx bxl-instagram bx-md"></i>
                </a>
                <a
                  href="/"
                  className="router-link-active router-link-exact-active w-[3rem] h-[3rem] flex items-center justify-center rounded-full border-solid border-[1px] border-white hover:border-[#3c3b89]"
                  aria-current="page"
                >
                  <i className="bx bxl-facebook bx-md"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            2021 © PT Bella Agung Citra Mandiri all rights reserved
          </div>
          <div>
            <img src="" alt="logo2" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
