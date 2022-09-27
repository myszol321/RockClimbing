import React from 'react'
import foto from '../images/foto.png'
import UserEventList from './EventList'
import Event from './Event'
// const axios = require('axios').default;

export default function ProfilePage(props) {
    
    const [userInfo, setUserInfo] = React.useState({})

    const [eventData, setEventData] = React.useState([])

    React.useEffect(() => {
        async function setAll() {
            const pathname = window.location.pathname.toString()
            const profileId = pathname.slice(13)
            if(props.userInfo.id.toString() === profileId) {
                setUserInfo(props.userInfo)

                const response_events1 = await fetch(`http://localhost:4000/events/user/${profileId}`)
                const data_events1 = await response_events1.json()
                const events = data_events1.map(entry => {
                    return(
                        <Event
                            key={entry.id}
                            {...entry}
                            handleClick={props.handleClick}
                        />
                    )
                })
                setEventData(events)

            } 
            else {
                console.log(profileId)
                const response_user2 = await fetch(`http://localhost:4000/users/${profileId}`)
                const data_user2 = await response_user2.json()
                setUserInfo(data_user2[0])

                const response_events2 = await fetch(`http://localhost:4000/events/user/${profileId}`)
                const data_events2 = await response_events2.json()
                console.log(data_events2)
                const events = data_events2.map(entry => {
                    return(
                        <Event
                            key={entry.id}
                            {...entry}
                            handleClick={props.handleClick}
                        />
                    )
                })
                setEventData(events)
            }
        }
        setAll();
    }, [])

    return (
        <div className="profile">
            <img className="profile--photo" src={foto} alt=""/>
            <div className="profile--info">
                <h1 className="profile--info--name">{userInfo.first_name} {userInfo.last_name}</h1>
                <p className="profile--info--description">{userInfo.age}, {userInfo.city}</p>   
            </div>
            <div className="profile--rating">
                <div className="profile--rating--stars">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
                <p className="profile--rating--number">ocenka</p>
            </div>
            
            <p className="profile--description">
                {userInfo.description}
            </p>
            
            <div className="profile--events">
                <h2>Utworzone wydarzenia</h2>
                <div className="events">
                    {eventData}
                </div>
            </div>
        </div>
    )
}