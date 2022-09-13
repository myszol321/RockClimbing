import React from 'react'
import pin from '../images/pin.png'

export default function EventPage(props) {
    return (
        <div className="event">
            <div className="event--location">
                <h1 className="event--location--title">Tytuł</h1>
                <div>
                    <img className="event--location--pin" src={pin}/>
                    <span className="event--location--country">Miasto</span>
                </div>
            </div>
            <p className="event--description">Opis</p>    
            <h3>Data</h3>
            <p></p>
            <div className="event--info">
                <p>Dodano przez: <b>Ola Myszka</b></p>
                <p>Wymagany sprzęt: <b>Ola Myszka</b></p>
            </div>
            <button className="event--join">Dołącz do wydarzenia</button>    
        </div>
    )
}