import React from "react"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import Navbar from "./components/Navbar"
import Event from "./components/Event"
import data from "./data"
import ProfilePage from "./components/ProfilePage"
import AddEvent from "./components/AddEvent"
import EditProfile from "./components/EditProfile"
import MainPage from "./components/MainPage"


export default function App() {
    const events = data.map(entry => {
        return(
            <Event
                key={entry.id}
                {...entry}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <LoginPage />
             <RegisterPage />
            <button className="button--add-event">
                + Dodaj własne wydarzenie
            </button>
            {events}
            {/* <ProfilePage />
            <AddEvent />
            <EditProfile />
            <MainPage /> */}
        </div>
    )
}

