import React from "react"
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"

import ProfilePage from "./components/ProfilePage"
import EventList from "./components/EventList"
import EventPage from "./components/EventPage"
import AddEvent from "./components/AddEvent"
import EditProfile from "./components/EditProfile"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import EditEvent from "./components/EditEvent"

export default function App() {

    const [userInfo, setUserInfo] = React.useState({
        id: "",
        loggedIn: false
    })

    const [profilePagePath, setProfilePagePath] = React.useState(`/profilePage/0`)
    const [eventPath, setEventPath] = React.useState(`/events/1`)
    const [eventId, setEventId] = React.useState("1")


    const changeUserInfo = (data) => {
        setUserInfo(() => {
            return {
                ...data,
                loggedIn: true
            }
        })
        console.log(data)
        changeProfilePath(data.id)
        console.log(data.id)

    }

    const logOut = () => {
        console.log(userInfo.id)
        setUserInfo(prevUserInfo => {
            const newState = {}
                Object.keys(prevUserInfo).forEach(key => {
                    newState[key] = key === "prevUserInfo.loggedIn" ? false : '';
                });
                return newState
        })
        console.log(profilePagePath)
    }

    function changeEventPage(id) {
        console.log("changeEvent")
        setEventPath(`/events/${id}`)
        setEventId(id)
        console.log(eventPath)
        console.log(id)
    }

    const changeProfilePath = (id) => {
        setProfilePagePath(`/profilePage/${id}`)
    }

    return (
        <div>
            <Navbar userInfo={userInfo} logOut={logOut} changeProfilePath={changeProfilePath}/>
            <div className="main-page">
                <Routes>
                    <Route path="/" element={<EventList userId={userInfo.id}  handleClick={changeEventPage}/>} />
                    <Route path={profilePagePath} element={<ProfilePage userInfo={userInfo} handleClick={changeEventPage}/>}/>
                    <Route path="/addEvent" element={<AddEvent creator_id={userInfo.id}/>}/>
                    <Route path="/editProfile" element={<EditProfile userInfo={userInfo} changeUserInfo={changeUserInfo}/>}/>
                    <Route path={eventPath} element={<EventPage eventId={eventId} userId={userInfo.id} changeProfilePath={changeProfilePath}/>}/>
                    <Route path="/loginPage" element={<LoginPage changeUserInfo={changeUserInfo}/>}/>
                    <Route path="/registerPage" element={<RegisterPage />}/>
                    <Route path="/editEvent" element={<EditEvent eventId={eventId}/>}/>
                </Routes>
            </div>
        </div>
    )
}

