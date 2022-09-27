import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const axios = require('axios').default;

export default function EditEvent(props) {

    const [formData, setFormData] = React.useState({
        city: "a",
        description: "a",
        gym_name: "a",
        training_length: "a",
        date_and_time: ""
    })

    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:4000/events/${props.eventId}`
                );          
                setFormData(() => {
                    return {
                        ...res.data[0],
                        date_and_time: JSON.stringify(res.data[0].date_and_time).slice(1,17) 
                    }
                })
            } catch (err) {
                if (err.response) {
                    alert(err.response);
                } else if (err.request) {
                    console.log(err.request);
                }
            }
        };
        fetchProducts();
    }, [])

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
            const fetchedData = fetch(`http://localhost:4000/events/${formData.id}`, {
                method: 'PUT',
                mode: 'cors',
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
            })
            .then((response) => {
                if (response.ok) {
                    alert("Zaktualizowano");
                    navigate(`/`)
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
                    Zaktualizuj      
                </button>
            </form>
    )
}