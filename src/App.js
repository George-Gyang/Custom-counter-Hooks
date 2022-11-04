import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import MainApp from './components/mainApp';

import './App.css';
import CustomHook from './components/CustomHook';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CustomHook />} />
        <Route path="/useReducer" element={<Counter />} />
        <Route path="/error_boundary" element={<ErrorBoundary />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Counter /> */}
      {/* <CustomHook />
      <NavLink to="/Counter">useReducer</NavLink> */}
    </div>
  );
}

export default App;
