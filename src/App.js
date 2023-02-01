
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './school/Dashbard';
import School from './school/School';



function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = { <School /> }></Route>
          <Route exact path = "/dashboard" element = { <Dashboard /> }></Route>
          <Route exact path = "/school" element = { <School />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
