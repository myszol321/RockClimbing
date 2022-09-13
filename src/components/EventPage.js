import React from 'react'
import pin from '../images/pin.png'

export default function EventPage(props) {
    return (
        <div className="entry">
            <div className="entry--location">
                <h1 className="entry--location--title">{props.title}</h1>
                <div>
                    <img className="entry--location--pin" src={pin}/>
                    <span className="entry--location--country">{props.country.toUpperCase()}</span>
                </div>
                <a className="entry--location--link" href={props.mapsLink} target="_blank">Otwórz Mapy Google</a>
            </div>
            <p className="entry--description">{props.description}</p>
            
            <h3>{props.date}</h3>
            <p></p>
            <div className="entry--info">
                <p>Dodano przez: <b>Ola Myszka</b></p>
                <p>Wymagany sprzęt: <b>Ola Myszka</b></p>
            </div>
            <button className="entry--join"><span>Dołącz do wydarzenia </span></button>    
        </div>
    )
}