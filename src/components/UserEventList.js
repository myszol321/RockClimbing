import React from 'react'
import { Link } from 'react-router-dom'
import Event from './Event'
const axios = require('axios').default;

export default function UserEventList(props) {
   
    console.log(props)
    const [eventData, setEventData] = React.useState([])

    React.useEffect(() => {
        console.log("coś nie działa")
            const fetchProducts = async () => {
                    const res = await axios.get(
                        `http://localhost:4000/events/user/18`
                    );
                    console.log(res.data)
                    console.log("swoje eventy")

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
            <h1>gowno</h1>
            <div className="events">
            {events}
            </div>
        </div>
    )
}