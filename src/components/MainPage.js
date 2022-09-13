import React from 'react';
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import ProfilePage from "./ProfilePage"
import AddEvent from "./AddEvent"
import EditProfile from "./EditProfile"
import EventPage from "./EventPage"
import EventList from "./EventList"

export default function MainPage() {
    

    return (
        <div className="main-page">
            {/* <LoginPage />
            <RegisterPage /> */}
            <button className="button--add-event">
                + Dodaj własne wydarzenie
            </button>
            <EventList />  
            {/* <ProfilePage /> */}
            {/* <AddEvent />
            <EditProfile /> */}
            <EventPage />
            
        </div>
    )
}