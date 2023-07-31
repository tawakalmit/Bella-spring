import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Tentangkami from "./page/Tentangkami";
import Toko from "./page/Toko";
import Produk from "./page/Produk";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tentangkami" element={<Tentangkami />} />
          <Route path="/Produk" element={<Produk />} />
          <Route path="/Toko" element={<Toko />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
