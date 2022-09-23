import React from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
const axios = require('axios').default;

export default function LoginPage(props) {

    const [formData, setFormData] = React.useState({
        login:"",
        password: ""
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
    }

    const getUserInfo = async (login) => {
        try {
            const res = await axios.get(
                `http://localhost:4000/users/${login}`
            );
            props.changeUserInfo(res.data[0])
            console.log('co to za data')
            console.log(res.data[0])
        } catch (err) {
            if (err.response) {
                alert(err.response);
            } else if (err.request) {
                console.log(err.request);
            }
        }
    };
    
    // function sendUserData() {
    //     const fetchedData = fetch(`http://localhost:4000/users/login`, {
    //         method: 'POST',
    //         mode: 'cors',
    //         body: JSON.stringify(formData),
    //         headers: { "Content-Type": "application/json" }
    //     })
    //     .then((response) => {
    //         if (response.ok) {
    //             alert("Zalogowano pomyślnie");

    //             getUserInfo(formData.login);

    //             navigate('/profilePage')
    //             return response.json()
    //         } else {
    //             alert(response.statusText)
    //             console.log(response.statusText)
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    //     return fetchedData
    // }

    function handleSubmit(event) {
        const number = 21
        event.preventDefault()
        getUserInfo(number);
        alert("Zalogowano!")
        navigate(`/profilePage/${number}`)
    }

    return (
        <form className="form--login" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nazwa użytkownika"
                className="form--login--input"
                name="login"
                value={formData.login}
                onChange={handleChange}
            />

            <input 
                type="password" 
                placeholder="Hasło"
                className="form--login--input"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            <button
                className="form--login--button"
            >
                Zaloguj się   
            </button>

            <p>Nie masz konta?</p>
            <Link to="/registerPage">
                <p>Zarejestruj się</p>
            </Link>
        </form>
    )
}