import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Detail from './components/Detail/Detail';
import Login from './components/Login/Login';

function App() {

  return (
    <div className="App">
      <Router basename='/disney-plus-app'>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/detail:id' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;