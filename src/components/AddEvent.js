import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddEvent(props) {
    const [formData, setFormData] = React.useState({
        creator_id: "",
        gym_name:"",
        city: "",
        date_and_time: "",
        training_length: "",
        description: "",
    })

    const navigate = useNavigate()

    React.useEffect( () => {
        console.log(props.creator_id)
        setFormData(prevData => {
            return {
                ...prevData,
                creator_id: props.creator_id
            }
        })
        
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:  value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)

        const fetchedData = fetch(`http://localhost:4000/events/add`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }
        })
        .then((response) => {
            if (response.ok) {
                alert("Dodano wydarzenie!");
                navigate('/');
                return response.json();
            } else {
                alert(response.statusText);
                console.log(response.statusText);
            }
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
        return fetchedData
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

                <textarea
                    placeholder="Opis"
                    className="form--event--input"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                /> 

                <button
                    className="form--event--button"
                >
                    Dodaj wydarzenie       
                </button>
            </form>
        </div>
    )
}