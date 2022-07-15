import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import MovieGrid from './MovieGrid'

const Home = () => {

    const context = useContext(AppContext)
    const {mode, searchTxt, setsearchTxt } = context

    const Searching = (e) => {
        setsearchTxt(e.target.value)
    }

    return (
        <div className='container mt-5' >

            <div className="input-group flex-nowrap">
                <span className="input-group-text bg-primary text-light" id="addon-wrapping">Search Movie</span>
                <input onChange={Searching} type="text" className={`form-control shadow-none bg-${mode==='dark'?'dark':'light'} text-${mode==='dark'?'light':'dark'}`} aria-describedby="addon-wrapping" />
            </div>

            <h2 className={`my-5 text-${mode==='dark'?'light':'dark'}`} >Search: {searchTxt}</h2>


            <MovieGrid />
        </div>
    )
}

export default Home