import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const axios = require('axios').default;

export default function LoginPage(props) {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const sendUserData = async () => {
    const fetchedData = await fetch(`http://localhost:4000/users/login`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(response.statusText);
        }
      })
      .then((responseJson) => {
        props.changeUserInfo(responseJson[0]);
        alert('Zalogowano pomyślnie');
        navigate(`/profilePage/${responseJson[0].id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleSubmit(event) {
    event.preventDefault();
    sendUserData();
  }

  return (
    <form className='form--login' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Nazwa użytkownika'
        className='form--login--input'
        name='email'
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type='password'
        placeholder='Hasło'
        className='form--login--input'
        name='password'
        value={formData.password}
        onChange={handleChange}
      />

      <button className='form--login--button'>Zaloguj się</button>

      <p>Nie masz konta?</p>
      <Link to='/registerPage'>
        <p>Zarejestruj się</p>
      </Link>
    </form>
  );
}
