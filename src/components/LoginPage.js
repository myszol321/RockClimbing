import React from "react"

export default function LoginPage() {

    const [formData, setFormData] = React.useState({
        login:"",
        password: ""
    })

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
        else if(!formData.password) {
            alert("Niepoprawne hasło");
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
            <a href="">Zarejestruj się</a>
            
        </form>
    )
}