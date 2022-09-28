import React from "react"
import {Navigate, useNavigate} from "react-router-dom"
const axios = require('axios').default;


export default function RegisterPage() {

    const [formData, setFormData] = React.useState({
        first_name: "",
        last_name: "",
        age: "",
        city: "",
        description: "",
        email: "",
        password: "",
        password2: ""
    })

    const navigate = useNavigate();

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        console.log(formData)
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        const fetchedData = fetch(`http://localhost:4000/users/register`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }
        })
        .then((response) => {
            if (response.ok) {
                alert("Zarejestrowano poprawnie");
                navigate('/loginPage')
                return response.json()
            } else {
                alert(response.statusText)
                console.log(response.statusText)
            }
        })
        .catch((error) => {
            console.log(error)
        })
        return fetchedData
        }

    return (
        <form className="form--register" onSubmit={handleSubmit}>

            <input 
                type="text"
                className="form--register--input" 
                placeholder="Imię"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
            />

            <input 
                type="text"
                className="form--register--input" 
                placeholder="Nazwisko"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
            />

            <input 
                type="text"
                className="form--register--input" 
                placeholder="Wiek"
                name="age"
                value={formData.age}
                onChange={handleChange}
            />

            <input 
                type="text"
                className="form--register--input" 
                placeholder="Miasto"
                name="city"
                value={formData.city}
                onChange={handleChange}
            />

            <textarea
                className="form--register--input" 
                placeholder="Opis"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />

            <input 
                type="email"
                className="form--register--input" 
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <input 
                type="password"
                className="form--register--input"
                placeholder="Hasło"
                name="password"
                value={formData.password}
                onChange={handleChange} 
            />
            
            <input 
                type="password" 
                placeholder="Ponów hasło"
                className="form--register--input"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
            />
            
                <button
                    type="submit"
                    className="form--register--button"
                >
                    Zarejestruj się
                </button>
        </form>
        
    )
}