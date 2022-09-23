import React from 'react'
import {Link} from "react-router-dom"
import pin from '../images/pin.png'

export default function Event(props) {
    return (
        <div className="entry">
            <div className="entry--location">
                <h1 className="entry--location--title">tytul</h1>
                <div>
                    <img className="entry--location--pin" src={pin}/>
                    <span className="entry--location--country">{props.place}</span>
                </div>
            </div>
            
            <h3>{props.date}</h3>
            <div className="entry--info">
                <p>Dodano przez: <b>{props.creator_id}</b></p>
            </div>
            <button className="entry--join">

                    <span>
                    <Link to="/eventPage">
                        Czytaj więcej
                    </Link>
                    </span>
            </button>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    )
}