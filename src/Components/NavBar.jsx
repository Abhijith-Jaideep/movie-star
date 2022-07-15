import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

    const context = useContext(AppContext)
    const { mode, changeMode } = context

    const change = ()=>{
        changeMode()
        props.changemode()
    }

    return (
        <nav className={`navbar navbar-${mode} navbar-expand-lg bg-${mode}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">MovieStar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    <div className="form-check form-switch mx-2">
                        <input onClick={change}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked={mode==='dark'?true:false}/>
                        <i style={{color:mode==='light'?'black':'white'}} className="fa-solid fa-moon"></i>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default NavBar