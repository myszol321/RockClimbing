import React from "react"
import globe from "../images/globe.png"
import profileIcon from "../images/profile-icon.png"

export default function Navbar() {
    const loggedIn = true
    return (
        <nav className="navbar">
            <div className="navbar--logo">
                <img 
                src={globe}
                className="navbar--logo--icon"
                alt="Globe"
                />
                <h2 className="navbar--logo--text">Rock climbing</h2>
            </div>
            <h3 className="navbar--section">Wydarzenia</h3>
            
            {loggedIn ?
            <div className="navbar--profile">
                <img
                src={profileIcon}
                className="navbar--profile--profile-icon"
                alt="Profile Icon"
                />
                <h3 className="navbar--profile--text">Profil</h3>
            </div>
            :
            <div className="navbar--profile">
                <h3 className="navbar--profile--text" onClick="">Zaloguj się</h3>
            </div>
            }
        </nav>
    )
}