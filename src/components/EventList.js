import React from 'react'
import { Link } from 'react-router-dom'
import Event from './Event'
import data from "../data"

export default function EventList(props) {
    const events = data.map(entry => {
        return(
            <Event
                key={entry.id}
                {...entry}
            />
        )
    })

    return (
        <div>
            <button className="button--add-event">
                <Link to="/addEvent">
                    + Dodaj własne wydarzenie
                </Link>    
            </button>
            <div className="events">
                {events}
            </div>
        </div>
    )
}