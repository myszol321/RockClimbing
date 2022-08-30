import React from 'react'

export default function AddEvent() {
    const [formData, setFormData] = React.useState({
        title:"",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        profile: "",
        gear: ""
    })

    return (
        <form className="form--event">
            <input
                type="text"
                placeholder="Tytuł"
                className="form--event--input"
                name="title"
            />

            <input
                type="text"
                placeholder="Lokalizacja"
                className="form--event--input"
                name="location"
            />

            <input
                type="date"
                placeholder="Data rozpoczęcia"
                className="form--event--input"
                name="startDate"
            />

            <input
                type="date"
                placeholder="Data zakończenia"
                className="form--event--input"
                name="endDate"
            />

            <input
                type="text"
                placeholder="Opis"
                className="form--event--input"
                name="description"
            />

            <input
                type="text"
                placeholder="Wymagany sprzęt"
                className="form--event--input"
                name="gear"
            />

            <button
                type="submit"
                className="form--event--button"
            >
                Dodaj wydarzenie
            </button>
        </form>
    )
}