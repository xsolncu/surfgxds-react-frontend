import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './wraps/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
  );
}

export default App;
