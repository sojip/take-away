import "./App.css";
import Hero from "./components/Hero";
import { HashRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { Menu } from "./components/Menu";
import { categories } from "./utils/categories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="menu/*" element={<Menu categories={categories} />} />
        </Route>
        {/* <Route path="*" element={<>Not Found</>} /> */}
      </Routes>
    </Router>
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
