import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import pin from '../images/pin.png'
import trash from '../images/trash.png'

export default function EventPage(props) {

    const [showOption, setShowOption] = React.useState(false)

    const navigate = useNavigate()

    function toggleOption() {
        setShowOption(prevOption => !prevOption)
    }

    function deleteEvent() {
        navigate('/')
    }

    return (
        <div className="event">
            <div className="event--location">
                <h1 className="event--location--title">Tytuł</h1>
                <div>
                    <img className="event--location--pin" src={pin} alt=""/>
                    <span className="event--location--country">Miasto</span>
                </div>
            </div>
            <p className="event--description">Opis</p>    
            <h3>Data</h3>
            <p></p>
            <div className="event--info">
                <p>Dodano przez: <b>Ola Myszka</b></p>
                <p>Wymagany sprzęt: <b>Ola Myszka</b></p>
                <p>Liczba osób: <b>2</b></p>
            </div>
            <button className="event--join">
                <Link to="/">
                    Dołącz do wydarzenia
                </Link>
            </button>
            <img className="event--delete" src={trash} alt="" onClick={toggleOption}/>
            {showOption 
            && 
            <div className="event--delete--options">
                <p>Na pewno?</p>
                <button onClick={deleteEvent}>Tak</button>
                <button onClick={toggleOption}>Nie</button>
            </div>
            }
        </div>
    )
}