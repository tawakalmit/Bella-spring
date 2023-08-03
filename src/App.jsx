import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Tentangkami from "./page/Tentangkami";
import Toko from "./page/Toko";
import Produk from "./page/Produk";
import Info from "./page/Info";
import Berita from "./page/Berita";
import Kontak from "./page/Kontak";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tentangkami" element={<Tentangkami />} />
          <Route path="/Produk" element={<Produk />} />
          <Route path="/Toko" element={<Toko />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Berita" element={<Berita />} />
          <Route path="/Kontak" element={<Kontak />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
