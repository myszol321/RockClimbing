import React from "react"

export default function LoginPage() {

    const [formData, setFormData] = React.useState({
        login:"",
        password: ""
    })

    return (
        <form className="form--login">
            <input 
                type="text" 
                placeholder="Nazwa użytkownika"
                className="form--login--input"
                name="login"
            />

            <input 
                type="text" 
                placeholder="Hasło"
                className="form--login--input"
                name="password"
                
            />

            <button
                type="submit"
                className="form--login--button"
            >
                Zaloguj się
            </button>

            <p>Nie masz konta?</p>
            <a href="">Zarejestruj się</a>
            
        </form>
    )
}