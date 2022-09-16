import React from "react"
import {Link} from "react-router-dom"
import globe from "../images/globe.png"
import profileIcon from "../images/profile-icon.png"

export default function Navbar(props) {
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
            <div className="navbar--profile">
                <Link to="/profilePage"  className="navbar--profile">
                    <img
                    src={profileIcon}
                    className="navbar--profile--profile-icon"
                    alt="Profile Icon"
                    />
                    <h3 className="navbar--profile--text">Profil</h3>
                </Link>
                <Link to="/editProfile">
                    <h3 className="navbar--profile--text">Ustawienia</h3>
                </Link>
                <Link to="/loginPage">
                    <h3 className="navbar--profile--text" onClick={props.changeLoggedIn}>Wyloguj się</h3>
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