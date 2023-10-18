import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { FullPageHero } from "./components/FullPageHero";
import { ModalLayout } from "./components/Layout";
import { Cart } from "./components/Cart";
import { Map } from "./components/Map";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FullPageHero />}>
            <Route element={<ModalLayout />}>
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/map" element={<Map />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
