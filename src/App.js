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
      <div className="App">
        <Header />
        <Hero />
      </div>

      <Routes>
        <Route path="/" index />
        <Route path="menu/*" element={<Menu categories={categories} />}>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
