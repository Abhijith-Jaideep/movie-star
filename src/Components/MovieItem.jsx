import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import {NavLink} from 'react-router-dom'

const MovieItem = (props) => {

    const context = useContext(AppContext)
    const {mode} = context
    
    return (
        <div>
            <div className={`card bg-${mode}`} style={{color:mode==='dark'?'white':'black',width: '13rem'}}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body" style={{height:'max-content'}}>
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text" dangerouslySetInnerHTML={{__html:props.summary.slice(0,200)}}></p>
                    <NavLink to="/description" className="btn btn-primary">Know More</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MovieItem