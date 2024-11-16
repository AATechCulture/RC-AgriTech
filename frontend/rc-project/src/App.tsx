import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import ImageAnalysis from "./pages/ImageAnalysis";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analysis" element={<ImageAnalysis />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </main>
        </div>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;