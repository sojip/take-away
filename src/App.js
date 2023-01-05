import "./App.css";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Menu } from "./components/Menu";
import { categories } from "./utils/categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="menu/*" element={<Menu categories={categories} />} />
        </Route>
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="App">
      <Hero />
      <Outlet />
    </div>
  );
}

export default App;
