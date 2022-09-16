import React from 'react'
import { Link } from 'react-router-dom'

export default function EditProfile() {
    const [formData, setFormData] = React.useState({
        login:"",
        password: "",
        pic: "",
        email:"",
        phone:"",
        city: "",
        age: "",
        description: "",
        gear: ""
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form className="form--profile" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nazwa użytkownika"
                className="form--profile--input"
                name="login"
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Hasło"
                className="form--profile--input"
                name="password"
                onChange={handleChange}
            />

            <label for="pic">Dodaj zdjęcie profilowe:</label>

            <input
                type="file"
                placeholder="Zdjęcie profilowe"
                className="form--profile--photo"
                name="pic"
                onChange={handleChange}
            />

            <input
                type="number"
                placeholder="Wiek"
                className="form--profile--input"
                name="age"
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Miasto"
                className="form--profile--input"
                name="city"
                onChange={handleChange}
            />

            <input
                type="tel"
                placeholder="Telefon"
                className="form--profile--input"
                name="phone"
                onChange={handleChange}
            />

            <textarea
                placeholder="O mnie..."
                className="form--profile--input"
                name="Description"
                onChange={handleChange}
            />

            <textarea
                placeholder="Posiadany sprzęt"
                className="form--profile--input"
                name="gear"
                onChange={handleChange}
            />

            <button
                type="submit"
                className="form--profile--button"
            >
                <Link to="/profilePage" className="text-link">
                    Zapisz zmiany
                </Link>
            </button>
        </form>
    )
}