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

export default function App() {

    const [userInfo, setUserInfo] = React.useState({
        loggedIn: false
    })

    const [profilePagePath, setProfilePagePath] = React.useState(`/profilePage/0`)

    const [eventPath, setEventPath] = React.useState(`/eventPath/0`)

    const changeUserInfo = (data) => {
        setUserInfo(prevUserInfo => {
            return {
                ...data,
                loggedIn: true
            }
        })
        setProfilePagePath(`/profilePage/${data.id}`)
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

    const changeEventPage = (id) => {
        setEventPath(`/eventPage/${id}`)
    }

    return (
        <div>
            <Navbar userInfo={userInfo} logOut={logOut}/>
            <div className="main-page">
                <Routes>
                    <Route path="/" element={<EventList handleClick={changeEventPage}/>} />
                    <Route path={profilePagePath} element={<ProfilePage userInfo={userInfo}/>}/>
                    <Route path="/addEvent" element={<AddEvent />}/>
                    <Route path="/editProfile" element={<EditProfile />}/>
                    <Route path={eventPath} element={<EventPage eventId="1"/>}/>
                    <Route path="/loginPage" element={<LoginPage changeUserInfo={changeUserInfo}/>}/>
                    <Route path="/registerPage" element={<RegisterPage />}/>
                </Routes>
            </div>
        </div>
    )
}

