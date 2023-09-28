import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPage from './Components/Add';
import ListPage from './Components/Get';
import Edit from './Components/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
