import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <nav className="nav-links">
            <NavLink to="/" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
                Accueil
            </NavLink>
            <NavLink to="/movies" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
                Films
            </NavLink>
            <NavLink to="/rated" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
                Les Mieux Notés
            </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/rated" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;