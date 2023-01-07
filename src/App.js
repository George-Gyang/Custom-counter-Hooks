import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import MainApp from './components/mainApp';
// import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import CustomHook from './components/CustomHook';
import Counter from './components/Counter';
import ErrorPage from './components/ErrorPage';
// import BuggyCounter from './components/ErrorTesting';
import ErrorTesting from './components/ErrorTesting';

function App() {
  return (
    // <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CustomHook />} />
          <Route path="/useReducer" element={<Counter />} />
          <Route path="/error_boundary" element={<ErrorTesting />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Counter /> */}
        {/* <CustomHook />
      <NavLink to="/Counter">useReducer</NavLink> */}
      </div>
    // </ChakraProvider>
  );
}

export default App;
