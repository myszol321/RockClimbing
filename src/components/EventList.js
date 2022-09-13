import React from 'react'
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
        <div className="events">
            {events}
        </div>
    )
}