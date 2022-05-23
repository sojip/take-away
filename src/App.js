import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import Cart from "./components/Cart";
import { categories } from "./utils/categories";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <Header />
        <Hero />
      </div> */}

      <Routes>
        <Route path="/*" element={<Home />}>
          <Route path="menu/*" element={<Menu categories={categories} />}>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
