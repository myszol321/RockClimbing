import React from 'react';
import { useNavigate } from 'react-router-dom';
const axios = require('axios').default;

export default function EditProfile(props) {
  const [formData, setFormData] = React.useState({
    first_name: '',
    last_name: '',
    age: '',
    city: '',
    description: '',
  });

  const navigate = useNavigate();

  React.useEffect(() => {
    setFormData(props.userInfo);
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fetchedData = fetch(`http://localhost:4000/users/${formData.id}`, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          alert('Zaktualizowano');
          props.changeUserInfo(formData);
          props.changeProfilePath(formData.id);
          navigate(`/profilePage/${formData.id}`);
          return response.json();
        } else {
          alert(response.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return fetchedData;
  }

  return (
    <form className='form--register' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form--register--input'
        placeholder='Imię'
        name='first_name'
        value={formData.first_name}
        onChange={handleChange}
      />

      <input
        type='text'
        className='form--register--input'
        placeholder='Nazwisko'
        name='last_name'
        value={formData.last_name}
        onChange={handleChange}
      />

      <input
        type='text'
        className='form--register--input'
        placeholder='Wiek'
        name='age'
        value={formData.age}
        onChange={handleChange}
      />

      <input
        type='text'
        className='form--register--input'
        placeholder='Miasto'
        name='city'
        value={formData.city}
        onChange={handleChange}
      />

      <textarea
        className='form--register--input'
        placeholder='Opis'
        name='description'
        value={formData.description}
        onChange={handleChange}
        contenteditable
      />

      <button type='submit' className='form--register--button'>
        Zaktualizuj dane
      </button>
    </form>
  );
}
