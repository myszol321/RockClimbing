import React from "react"

export default function RegisterPage() {

    const [formData, setFormData] = React.useState({
        login:"",
        email: "",
        password: "",
        confirmPassword: ""
    })

    return (
        <form className="form--register">
            <input 
                type="text"
                className="form--register--input" 
                placeholder="Nazwa użytkownika"
                name="login"
            />

            <input 
                type="email"
                className="form--register--input" 
                placeholder="Email"
                name="email"
            />

            <input 
                type="text"
                className="form--register--input"
                placeholder="Hasło"
                name="password" 
            />
            
            <input 
                type="text" 
                placeholder="Ponów hasło"
                className="form--register--input"
                name="confirmPassword" 
            />
            
            <button
                type="submit"
                className="form--register--button"
            >
                Zarejestruj się
            </button>
        </form>
    )
}