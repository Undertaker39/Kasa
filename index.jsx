import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './composants/Header/Header'
import Footer from './composants/Footer/Footer'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logement from'./composants/Logement/Logement'
import Erreur from './pages/Erreur'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Apropos />} />
                <Route path="/logement-:id" element={<Logement />} />
                <Route path="*" element={<Erreur />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)