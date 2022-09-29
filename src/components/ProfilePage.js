import React from 'react'
import { useNavigate } from 'react-router-dom'
import profileIcon from "../images/profile-icon.png"
import Event from './Event'

export default function ProfilePage(props) {
    
    const [userInfo, setUserInfo] = React.useState({})
    const [rating, setRating] = React.useState("")
    const [eventData, setEventData] = React.useState([])

    const navigate = useNavigate();

    React.useEffect(() => {
        async function setAll() {
            const pathname = window.location.pathname.toString()
            const profileId = pathname.slice(13)
            if(props.userInfo.id.toString() === profileId) {
                setUserInfo(props.userInfo)
            } 
            else {
                const response_user = await fetch(`http://localhost:4000/users/${profileId}`)
                const data_user = await response_user.json()
                setUserInfo(data_user[0])
            }
                console.log(profileId)
                const response_events = await fetch(`http://localhost:4000/events/user/${profileId}`)
                const data_events = await response_events.json()
                console.log(data_events)
                const events = data_events.map(entry => {
                    return(
                        <Event
                            key={entry.id}
                            {...entry}
                            handleClick={props.handleClick}
                        />
                    )
                })
                setEventData(events)

                const response_stars = await fetch(`http://localhost:4000/users/${profileId}/stars`)
                const data_stars = await response_stars.json()
                setRating(data_stars[0].average_rating.slice(0,4))
        }
        setAll();
    }, [])

    const changeRating = (e) => {
        console.log(e.target.value)
        console.log(props.userInfo.id)
        console.log(userInfo.id)

        if(userInfo.id === props.userInfo.id) {
            alert('Nie możesz ocenić siebie')
        } else if(props.userInfo.id === "") {
            navigate(`/loginPage`)
        } else {
            const fetchedData = fetch(`http://localhost:4000/users/${userInfo.id}/stars`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({my_id: props.userInfo.id, stars: e.target.value}),
                headers: { "Content-Type": "application/json" }
            })
            .then((response) => {
                if (response.ok) {
                    console.log(response)
                    
                } else {
                    alert(response.statusText)
                    console.log(response.statusText)
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
        async function getRating() {
            const response_stars = await fetch(`http://localhost:4000/users/${userInfo.id}/stars`)
            const data_stars = await response_stars.json()
            setRating(data_stars[0].average_rating.slice(0,4))
        }
        getRating();
    }

    return (
        <div className="profile">
            <img className="profile--photo" src={profileIcon} alt=""/>
            <div className="profile--info">
                <h1 className="profile--info--name">{userInfo.first_name} {userInfo.last_name}</h1>
                <p className="profile--info--description">{userInfo.age}, {userInfo.city}</p>   
            </div>
            <div className="profile--rating">
                <div className="profile--rating--stars">
                    <input type="radio" id="star5" name="rate" value="5" checked={rating === 5} onChange={changeRating}/>
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" checked={rating >= 4 && rating < 5} onChange={changeRating}/>
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" checked={rating >= 3 && rating < 4} onChange={changeRating}/>
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" checked={rating >= 2 && rating < 3} onChange={changeRating}/>
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" checked={rating >= 1 && rating < 2} onChange={changeRating}/>
                    <label for="star1" title="text">1 star</label>
                </div>
                <p className="profile--rating--number">{rating}</p>
            </div>
            
            <p className="profile--description">
                {userInfo.description}
            </p>
            
            <div className="profile--events">
                <h2>Wydarzenia</h2>
                <div className="profile-events">
                    {eventData}
                </div>
            </div>
        </div>
    )
}