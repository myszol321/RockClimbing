import React from 'react'
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import pin from '../images/pin.png'

export default function Event(props) {
    const navigate = useNavigate();

    function openEvent() {
        props.handleClick(props.id);
        navigate(`/events/${props.id}`);
    }

    const date = JSON.stringify(props.date_and_time).slice(1,11) + ' ' + JSON.stringify(props.date_and_time).slice(12, 17)

    return (
        <div className="entry">
            <div className="entry--location">
                <h1 className="entry--location--title">{props.gym_name}</h1>
                <div>
                    <img className="entry--location--pin" src={pin}/>
                    <span className="entry--location--country">{props.city}</span>
                </div>
            </div>
            
            <h3>{date}</h3>
            <div className="entry--info">
                <p>Dodano przez: <b>{props.creator_id}</b></p>
            </div>
            <button className="entry--join">
                    <span onClick={openEvent}>
                        Czytaj więcej
                    </span>
            </button>
        </div>
    )
}