import React from "react";
import Layout from "../components/Layout/Layout";
const Kontak = () => {
  return (
    <Layout>
      <h1 className="font-normal text-[#949494] text-center text-2xl uppercase py-10 bg-[#F7F6F7]">
        Kontak
      </h1>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 className="text-[18px] font-bold uppercase text-[#2e3192]">
                Head Office
              </h2>
              <div className="border-2 w-10 border-gray-500/50 my-3"></div>
              <h3 className="my-6 text-neutral-500 dark:text-neutral-300 text-xl font-semibold">
                PT Bella Agung Citra Mandiri
              </h3>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Jalan Raya Somban Lor no 32
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Kebonsari, Candi, Sidoarjo
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Jawa Timur
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Email:
                <a href="#" className="text-[#2c8ec7]">
                  bcm_sb@yahoo.co.id, bellaspringdesign@gmail.com
                </a>
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Carrer:
                <a href="#" className="text-[#2c8ec7]">
                  Hrd.bellasb@gmail.com
                </a>
              </p>

              <h2 className="text-[18px] text-[#2e3192] font-bold uppercase mt-20">
                Branch Office
              </h2>
              <div className="border-2 w-10 border-gray-500/50 my-3"></div>
              <h3 className="my-6 text-neutral-500 dark:text-neutral-300 text-xl font-semibold">
                PT Gelang Gemilang Jaya
              </h3>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Jalan Kolonel R.W. Soegiarto No 32
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Pongangan, Gunung Pati, Semarang
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Jawa Tengah
              </p>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Email:
                <a href="#" className="text-[#2c8ec7]">
                  ggj.smg@gmail.com
                </a>
              </p>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 className="text-[18px] font-bold uppercase text-[#2e3192]">
                Keep in touch
              </h2>
              <div className="border-2 w-10 border-gray-500/50 my-3"></div>
              <p className="text-neutral-500 text-sm dark:text-neutral-300">
                Kami ingin mendengar dari Anda! Masukan Anda sangat berharga dan
                akan memungkinkan kami untuk melayani kebutuhan Anda di masa
                depan dengan lebih baik
              </p>
              <form>
                <div className="relative mb-6 mt-4" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent p-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90"
                    placeholder="Name"
                  />
                  <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    Nama Anda
                  </label>
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent p-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                  <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    Alamat Email
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="number"
                    className="peer block min-h-[auto] w-full rounded border bg-transparent p-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                  <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    No. Telp
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border bg-transparent p-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="Your message"
                  ></textarea>
                  <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    Tuliskan Pesan Anda ...
                  </label>
                </div>
                <button
                  type="button"
                  className="mb-6 inline-block rounded bg-[#949494] px-6 pt-2.5 pb-2 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  KIRIM
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kontak;
