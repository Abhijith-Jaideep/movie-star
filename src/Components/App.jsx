import React, {useState } from 'react'
import AppStates from './context/AppStates'
import Home from './Home'
import NavBar from './NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import Description from './Description'
import './app.css'



const App = () => {

    const [mode, setmode] = useState(localStorage.getItem('mode'))

    const changemode = ()=>{
        if(mode==='dark')
            setmode('light')
        else
            setmode('dark')
    }

    return (
        <AppStates>
            <Router>
                    <div style={{ backgroundColor: `${mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'}`,minHeight:'1000px'}}>
                        <NavBar changemode={changemode}/>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/description" element={<Description />} />
                        </Routes>
                    </div>
            </Router>
        </AppStates >
    )
}

export default App