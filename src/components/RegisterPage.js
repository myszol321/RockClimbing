import React from "react"
import ConditionalLink from "./ConditionalLink"
import {Navigate} from "react-router-dom"

export default function RegisterPage() {

    const [formData, setFormData] = React.useState({
        login:"",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [successfulSubmit, setSuccessfulSubmit] = React.useState(false)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
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
        else if(!formData.email) {
            alert("Niepoprawny adres email");
        }
        else if(!formData.password) {
            alert("Niepoprawne hasło");
        }
        else if(!formData.confirmPassword || formData.confirmPassword != formData.password) {
            alert("Hasła się nie zgadzają");
        }
        else {
            alert("Zarejestrowano poprawnie");
            setSuccessfulSubmit(true)
        }
        console.log(formData)
    }

    return (
        <form className="form--register" onSubmit={handleSubmit}>
            <input 
                type="text"
                className="form--register--input" 
                placeholder="Nazwa użytkownika"
                name="login"
                value={formData.login}
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
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            
                <button
                    type="submit"
                    className="form--register--button"
                >
                    Zarejestruj się
                </button>
                {successfulSubmit && <Navigate to="/loginPage" replace={true}  />}
        </form>
        
    )
}