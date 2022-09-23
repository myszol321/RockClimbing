import React from 'react'
import foto from '../images/foto.png'
import EventList from './EventList'

export default function ProfilePage(props) {

    return (
        <div className="profile">
            <img className="profile--photo" src={foto} alt=""/>
            <div className="profile--info">
                <h1 className="profile--info--name">{props.userInfo.first_name} {props.userInfo.last_name}</h1>
                <p className="profile--info--description">{props.userInfo.age}, {props.userInfo.city}</p>   
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
                {props.userInfo.description}
            </p>
            
            <div className="profile--equipment">
                <h2>Posiadany sprzęt:</h2>
                <ul>
                    <li>lina</li>
                    <li>lina</li>
                    <li>lina</li>
                    <li>lina</li>
                </ul>
            </div>
            
            <div className="profile--events">
                <h2>Utworzone wydarzenia</h2>
                <EventList />
            </div>
        </div>
    )
}