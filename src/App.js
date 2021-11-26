import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Contact from './components/Contact'
import Home from './components/Home'


function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/contactme" element={<Contact />}/>

                <Route exact path="/" element={<Home />} />

            </Routes>
        </div>
    </Router>
  );
}

export default App;
