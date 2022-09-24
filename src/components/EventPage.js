import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import pin from '../images/pin.png'
import trash from '../images/trash.png'
const axios = require('axios').default;

export default function EventPage(props) {

    const [eventInfo, setEventInfo] = React.useState({})
    const [showOption, setShowOption] = React.useState(false)
    const [joined, setJoined] = React.useState(false)
    const [isDisabled, setDisabled] = React.useState(false)

    const navigate = useNavigate()

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:4000/events/${props.eventId}`
                );
                setEventInfo(res.data[0])
                console.log(res.data[0])
                console.log(res.data[0].date_and_time)

                setEventInfo(prevData => {
                    return {
                        ...res.data[0],
                        date_and_time: JSON.stringify(res.data[0].date_and_time).slice(1,11) 
                                        + ' ' + JSON.stringify(res.data[0].date_and_time).slice(12, 17)
                    }
                })
            } catch (err) {
                if (err.response) {
                    alert(err.response);
                } else if (err.request) {
                    console.log(err.request);
                }
            }
        };
        fetchProducts();
        
    }, []);
  
    function toggleOption() {
        setShowOption(prevOption => !prevOption)
    }

    const changeJoin = () => {
        console.log(props.userId)
        console.log(eventInfo.creator_id)
        console.log(eventInfo.creator_id.toString() === props.userId.toString())
        if(eventInfo.creator_id.toString() === props.userId.toString()) {
            setDisabled(true)
            alert("Nie możesz dołączyć do swojego wydarzenia")
        } else if (props.userId === "") {
            navigate('/loginPage')
        } else {
            setJoined(prevState => !prevState)
        }
        console.log(isDisabled)
    }

    function deleteEvent() {
        navigate('/')
    }

    return (
        <div className="event">
            <div className="event--location">
                <h1 className="event--location--title">{eventInfo.gym_name}</h1>
                <div>
                    <img className="event--location--pin" src={pin} alt=""/>
                    <span className="event--location--country">{eventInfo.city}</span>
                </div>
            </div>
            <p className="event--description">{eventInfo.description}</p>    
            <h3>{eventInfo.date_and_time}</h3>
            <p></p>
            <div className="event--info">
                <p>Dodano przez: <b>{eventInfo.creator_id}</b></p>
                <p>Długość treningu: <b>{eventInfo.training_length}</b></p>
            </div>
            {joined
            ?
            <button className={`event--joined`} onClick={changeJoin}>
                    Wzięto udział!
            </button>
            :
            <button className={`event--join`} onClick={changeJoin} disabled={isDisabled}>
                    <span>Dołącz do wydarzenia</span>
            </button>
            }
            
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