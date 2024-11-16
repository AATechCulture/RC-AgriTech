import React from 'react';
import './App.css';
import Home from "./pages/Home.js";
import Analyze from "./pages/Analyze.js";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
