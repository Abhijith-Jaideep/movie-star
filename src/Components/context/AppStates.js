import React, { useState } from 'react'
import AppContext from './AppContext'



const AppStates = (props) => {

    const [mode, setmode] = useState(localStorage.getItem('mode'))
    const [searchTxt, setsearchTxt] = useState('')

    const changeMode = () => {
        

        if (mode==='light') {
            setmode('dark')
            localStorage.setItem('mode', 'dark')
        }
        else {
            setmode('light')
            localStorage.setItem('mode', 'light')
        }
    }

    return (
        <AppContext.Provider value={{ mode, changeMode, searchTxt, setsearchTxt }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppStates