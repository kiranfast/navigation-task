import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import All from './All';
import Fullstack from './Fullstack';
import Datascience from './Datascience';
import Carrer from './Carrer'
import Cyber from './Cyber';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<All/>} />
          <Route path="/Fullstack" element={<Fullstack/>} />
          <Route path="/Datascience" element={<Datascience/>} />
          <Route path="/Cyber" element={<Cyber/>} />
          <Route path="/Carrer" element={<Carrer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;