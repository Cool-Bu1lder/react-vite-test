import "./App.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Routes, Route } from "react-router";

import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
