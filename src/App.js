import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
