import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
