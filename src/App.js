import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FullPageHero } from "./components/Layout/FullPageHero";
import { ModalLayout } from "./components/Layout/Layout";
import { Cart } from "./components/Layout/Cart";
import { Map } from "./components/Layout/Map";
import { Menu } from "./components/Layout/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullPageHero />}>
            <Route element={<ModalLayout />}>
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/map" element={<Map />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
