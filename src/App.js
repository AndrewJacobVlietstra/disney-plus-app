import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/HomePage/Home';
import Search from './components/SearchPage/Search';
import Detail from './components/Detail/Detail';
import Settings from './components/SettingsPage/Settings';
import Showcase from './components/Showcase/Showcase';

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
          <Route path='/showcase' element={<Showcase />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;