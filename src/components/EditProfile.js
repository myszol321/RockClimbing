import React from 'react'

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
            />

            <input
                type="text"
                placeholder="Hasło"
                className="form--profile--input"
                name="password"
            />

            <label for="pic">Dodaj zdjęcie profilowe:</label>

            <input
                type="file"
                placeholder="Zdjęcie profilowe"
                className="form--profile--photo"
                name="pic"
            />

            <input
                type="number"
                placeholder="Wiek"
                className="form--profile--input"
                name="age"
            />

            <input
                type="text"
                placeholder="Miasto"
                className="form--profile--input"
                name="city"
            />

            <input
                type="tel"
                placeholder="Telefon"
                className="form--profile--input"
                name="phone"
            />

            <textarea
                placeholder="O mnie..."
                className="form--profile--input"
                name="Description"
            />

            <textarea
                placeholder="Posiadany sprzęt"
                className="form--profile--input"
                name="gear"
            />

            <button
                type="submit"
                className="form--profile--button"
                
            >
                Zapisz zmiany
            </button>
        </form>
    )
}