import React from 'react'

export default function AddEvent() {
    const [formData, setFormData] = React.useState({
        title:"",
        location: "",
        description: "",
        isOneDay: false,
        startDate: "",
        endDate: "",
        profile: "",
        gear: "",
        numberOfPeople: ""
    })

    const [isDisabled, setIsDisabled] = React.useState(false)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

        if(formData.isOneDay === true) {
            setIsDisabled(false)
        }
        else {
            setIsDisabled(true)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        if(!formData.title) {
            alert("Niepoprawny tytuł")
        }
        else if(!formData.location) {
            alert("Niepoprawna lokalizacja")
        }
        else if(isDisabled) {
            if(!formData.startDate) {
                alert("Niepoprawna data")
            }
        }
        else if (!formData.startDate || !formData.endDate ||
            formData.startDate > formData.endDate) {
            alert("Niepoprawna data")
        }

        else if(!formData.description) {
            alert("Niepoprawny opis")
        }
        else if(!formData.gear) {
            alert("Niepoprawny sprzęt")
        }
        else if(!formData.numberOfPeople || formData.numberOfPeople < 1) {
            alert("Niepoprawna liczba osób")
        }
        else {
            alert("Dodano wydarzenie")
        }
        console.log(formData)
    }

    return (
        <div>
            <form className="form--event" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tytuł"
                    className="form--event--input"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Lokalizacja"
                    className="form--event--input"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />

                <input
                    type="checkbox"
                    id="isOneDay"
                    name="isOneDay"
                    checked={formData.isOneDay}
                    onChange={handleChange}
                />
                <label htmlFor="isOneDay">Wyjazd jednodniowy?</label>
                <br></br>
                <input
                    type="datetime-local"
                    placeholder="Data rozpoczęcia"
                    className="form--event--input"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                />

                <input
                    type="datetime-local"
                    placeholder="Data zakończenia"
                    className="form--event--input"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    disabled={isDisabled}
                />

                <input
                    type="text"
                    placeholder="Opis"
                    className="form--event--input"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Wymagany sprzęt"
                    className="form--event--input"
                    name="gear"
                    value={formData.gear}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    placeholder="Liczba osób"
                    className="form--event--input"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                />

                <button
                    className="form--event--button"
                >
                    Dodaj wydarzenie
                </button>
            </form>
            {/* {modal && <Modal error={modalText}/>} */}
        </div>
    )
}