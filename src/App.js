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
import AllUsers from "./components/AllUsers"

export default function App() {
    const [userInfo, setUserInfo] = React.useState({
        login: "",
        loggedIn: false
    })

    function changeLoggedIn() {
        console.log(userInfo)
        setUserInfo(prevFormData => {
            return {
                login: userInfo.login ? "" : "dupa",
                loggedIn: !prevFormData.loggedIn
            }
        })
        console.log(userInfo)
    }

    return (
        <div>
            <Navbar userInfo={userInfo} changeLoggedIn={changeLoggedIn}/>
            <div className="main-page">
                <Routes>
                    <Route path="/" element={<AllUsers />} />
                    <Route exact path="/profilePage" element={<ProfilePage userInfo={userInfo}/>}/>
                    <Route path="/addEvent" element={<AddEvent />}/>
                    <Route path="/editProfile" element={<EditProfile />}/>
                    <Route path="/eventPage" element={<EventPage />}/>
                    <Route path="/loginPage" element={<LoginPage logInfo={changeLoggedIn}/>}/>
                    <Route path="/registerPage" element={<RegisterPage />}/>
                </Routes>
            </div>
        </div>
    )
}

