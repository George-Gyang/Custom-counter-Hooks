import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import MainApp from './components/mainApp';

import './App.css';
import CustomHook from './components/CustomHook';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useReducer" element={<Counter />} />
      <Route path="/counter" element={<CustomHook />} />
      <Route path="/custom_hook_counter" element={<CustomHook />} />
      </Routes>
      {/* <Counter /> */}
      {/* <CustomHook />
      <NavLink to="/Counter">useReducer</NavLink> */}
    </div>
  );
}

export default App;
