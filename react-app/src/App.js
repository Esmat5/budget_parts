import React from 'react';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/navbar" element={< Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
