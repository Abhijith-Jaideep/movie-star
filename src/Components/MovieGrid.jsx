import React, { useEffect } from 'react'
import MovieItem from './MovieItem'
import { useState } from 'react'
import mnf from "./movie not found.jpg"
import { useContext } from 'react'
import AppContext from "./context/AppContext"



const MovieGrid = () => {

    const [list, setlist] = useState([])
    const [temp, settemp] = useState([])
    const context = useContext(AppContext)
    const { mode,searchTxt } = context

    const fetchmovies = async () => {
        let array = []
        for (let i = 0; i < 5; i++) {
            let response = await fetch(`https://api.tvmaze.com/shows?page=${i}`)
            const json = await response.json()
            array = array.concat(json)
        }
        setlist(array)
        settemp(array)
    }


    const filter = () => {
        let l = list.filter((Element) => {
            if ( Element.name.toLowerCase().substr(0,searchTxt.length).includes(searchTxt.toLowerCase())) {return Element }
            return ""
        })

        settemp(l)
    }


    useEffect(() => {
        fetchmovies()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        filter()
        // eslint-disable-next-line
    }, [searchTxt])



    return (
        <div className='row row-cols-1 row-cols-md-5 g-4'>

            {temp.length===0?<h2 style={{color:mode==='light'?'dark':'white'}}>No Results Found</h2>:temp.map((Element) => {
                return <div className='col container' key={Element.id}>
                    <MovieItem name={Element.name === null ? "no title" : Element.name} summary={Element.summary === null ? "No Description" : Element.summary} image={Element.image === null ? mnf : Element.image.medium} />
                </div>
            })}

        </div>
    )
}

export default MovieGrid