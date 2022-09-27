import React from "react"
import {Link, useNavigate } from "react-router-dom"
import globe from "../images/globe.png"
import profileIcon from "../images/profile-icon.png"

export default function Navbar(props) {

    const navigate = useNavigate()

    const changeProfilePath = () => {
        props.changeProfilePath(props.userInfo.id)
        navigate(`/profilePage/${props.userInfo.id}`)
    }
    return (
        <nav className="navbar">
            <Link to="/" className="navbar--logo">
                <img 
                src={globe}
                className="navbar--logo--icon"
                alt="Globe"
                />
                <h2 className="navbar--logo--text">Rock climbing</h2>
            </Link>

            {props.userInfo.loggedIn
            ?   
            <div className="navbar--profile-section">
                <div className="navbar--profile" onClick={changeProfilePath}>
                    <img
                    src={profileIcon}
                    className="navbar--profile--profile-icon"
                    alt="Profile Icon"
                    />
                    <h3 className="navbar--profile--text">Profil</h3>
                </div>
                <Link to="/editProfile">
                    <h3 className="navbar--profile--text">Ustawienia</h3>
                </Link>
                <Link to="/loginPage">
                    <h3 className="navbar--profile--text" onClick={props.logOut}>Wyloguj się</h3>
                </Link>
            </div>
            :
            <Link to="/loginPage" className="navbar--profile">
                <h3 className="navbar--profile--text">Zaloguj się</h3>
            </Link> 
            }
        </nav>
    )
}