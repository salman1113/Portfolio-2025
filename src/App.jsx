import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navabar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
    return (
        <Router>
            <div className='min-h-screen flex flex-col'>
                <Navbar />
                <main className='flex-grow'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App