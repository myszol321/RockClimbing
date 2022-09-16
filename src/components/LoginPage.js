import React from "react"
import {Link} from "react-router-dom"
import {Navigate} from "react-router-dom"

export default function LoginPage(props) {

    const [formData, setFormData] = React.useState({
        login:"",
        password: ""
    })

    const [successfulSubmit, setSuccessfulSubmit] = React.useState(false)

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if(!formData.login) {
            alert("Niepoprawna nazwa użytkownika");
        }
        else if(!formData.password) {
            alert("Niepoprawne hasło");
        }
        else {
            setSuccessfulSubmit(true)
            props.logInfo()
        }
        console.log(formData)
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
            
            {successfulSubmit && <Navigate to="/profilePage" replace={true}  />}
        </form>
    )
}