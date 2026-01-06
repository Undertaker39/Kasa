import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Header from './composants/Header/Header'
import Footer from './composants/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Housing_main from './pages/Housing_main'
import Error from './pages/Error'
 
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/home/:id" element={<Housing_main />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)