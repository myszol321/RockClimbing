import React from 'react'
import { Link } from 'react-router-dom'
import Event from './Event'
const axios = require('axios').default;

export default function EventList(props) {
   
    const [eventData, setEventData] = React.useState([])

    React.useEffect(() => {
            const fetchProducts = async () => {
                const res = await axios.get(
                    "http://localhost:4000/events/"
                );
                setEventData(res.data);
            };
            fetchProducts();
    }, []);

    const events = eventData.map(entry => {
        return(
            <Event
                key={entry.id}
                {...entry}
                handleClick={props.handleClick}
            />
        )
    })


    return (
        <div>
            {props.userId
            ?
            <button className="button--add-event">
                <Link to="/addEvent">
                    + Dodaj własne wydarzenie
                </Link>    
            </button>
            :
            <p></p>
            }
            <div className="events">
                {events}
            </div>
        </div>
    )
}