import React from 'react'
import {Link} from "react-router-dom"
import pin from '../images/pin.png'

export default function Event(props) {
    return (
        <div className="entry">
            <div className="entry--location">
                <h1 className="entry--location--title">{props.title}</h1>
                <div>
                    <img className="entry--location--pin" src={pin}/>
                    <span className="entry--location--country">{props.country.toUpperCase()}</span>
                </div>
                {/* <a className="entry--location--link" href={props.mapsLink} target="_blank">Otwórz Mapy Google</a> */}
            </div>
            
            <h3>{props.date}</h3>
            <div className="entry--info">
                <p>Dodano przez: <b>Ola Myszka</b></p>
            </div>
            <button className="entry--join">

                    <span>
                    <Link to="/eventPage">
                        Czytaj więcej
                    </Link>
                    </span>
            </button>
        </div>
    )
}