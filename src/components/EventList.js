import React from 'react'
import { Link } from 'react-router-dom'
import Event from './Event'
const axios = require('axios').default;

export default function EventList(props) {
   
    const [eventData, setEventData] = React.useState([])

    const pathname = window.location.pathname;

    React.useEffect(() => {
        const fetchProducts = async () => {
            if(pathname==='/'){
                const res = await axios.get(
                    "http://localhost:4000/events/"
                );
                console.log("wszystkie eventy")
                console.log(res.data)
                setEventData(res.data);
            } else {
                const res = await axios.get(
                    `http://localhost:4000/events/user/${props.currentUserId}`
                );
                console.log(res.data)
                console.log("swoje eventy")

                setEventData(res.data);
            }
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
            &&
            <button className="button--add-event">
                <Link to="/addEvent">
                    + Dodaj własne wydarzenie
                </Link>    
            </button>
            }
            {pathname==='/'
            ?
            <div className="events">
                {events}
            </div>
            :
            <div className="profile--events">
                {events}
            </div>
            }
        </div>
    )
}