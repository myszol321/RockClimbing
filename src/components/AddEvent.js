import React from 'react'
import { Link } from 'react-router-dom'

export default function AddEvent() {
    const [formData, setFormData] = React.useState({
        gym_name:"",
        city: "",
        date_and_time: "",
        training_length: "",
        description: "",
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
        
        // if(!formData.title) {
        //     alert("Niepoprawny tytuł")
        // }
        // else if(!formData.location) {
        //     alert("Niepoprawna lokalizacja")
        // }
        // else if(isDisabled) {
        //     if(!formData.startDate) {
        //         alert("Niepoprawna data")
        //     }
        // }
        // else if (!formData.startDate || !formData.endDate ||
        //     formData.startDate > formData.endDate) {
        //     alert("Niepoprawna data")
        // }

        // else if(!formData.description) {
        //     alert("Niepoprawny opis")
        // }
        // else if(!formData.gear) {
        //     alert("Niepoprawny sprzęt")
        // }
        // else if(!formData.numberOfPeople || formData.numberOfPeople < 1) {
        //     alert("Niepoprawna liczba osób")
        // }
        // else {
        //     alert("Dodano wydarzenie")
        // }
        console.log(formData)
    }

    return (
        <div>
            <form className="form--event" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Miejsce"
                    className="form--event--input"
                    name="gym_name"
                    value={formData.gym_name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Miasto"
                    className="form--event--input"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />

                <label htmlFor="date">Data i godzina</label>

                <input
                    type="datetime-local"
                    placeholder="Data i godzina"
                    className="form--event--input"
                    id="date"
                    name="date_and_time"
                    value={formData.date_and_time}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    placeholder="Długość treningu"
                    className="form--event--input"
                    name="training_length"
                    value={formData.training_length}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Opis"
                    className="form--event--input"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                /> 

                <button
                    className="form--event--button"
                >
                    <Link to="/">
                        Dodaj wydarzenie
                    </Link>        
                </button>
            </form>
        </div>
    )
}