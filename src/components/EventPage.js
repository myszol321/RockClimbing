import React from 'react';
import { useNavigate } from 'react-router-dom';
import pin from '../images/pin.png';
import trash from '../images/trash.png';
import pencil from '../images/pencil.png';
const axios = require('axios').default;

export default function EventPage(props) {
  const [eventInfo, setEventInfo] = React.useState({});
  const [showOption, setShowOption] = React.useState(false);
  const [joined, setJoined] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);
  const [buttonText, setButtonText] = React.useState('Wzięto udział!');

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/events/${props.eventId}`
        );

        setEventInfo(res.data[0]);

        if (res.data[0].creator_id.toString() === props.userId.toString()) {
          setDisabled(true);
        }

        setEventInfo((prevData) => {
          return {
            ...res.data[0],
            date_and_time:
              JSON.stringify(res.data[0].date_and_time).slice(1, 11) +
              ' ' +
              JSON.stringify(res.data[0].date_and_time).slice(12, 17),
          };
        });

        if (!res.data[0].is_active) {
          if (
            res.data[0].second_user_id.toString() === props.userId.toString()
          ) {
            setJoined(true);
          } else {
            setJoined(false);
          }
        } else {
          setJoined(false);
        }
      } catch (err) {
        if (err.response) {
          alert(err.response);
        } else if (err.request) {
          console.log(err.request);
        }
      }
    };
    fetchProducts();
  }, []);

  React.useEffect(() => {
    var timer;
    if (joined) {
      timer = setTimeout(() => {
        setButtonText('Anuluj udział');
      }, 3000);
    } else {
      setButtonText('Wzięto udział w wydarzeniu!');
    }
    return () => clearTimeout(timer);
  }, [joined]);

  const fetchChangeJoin = async () => {
    var url = '';
    if (!joined) {
      url = `http://localhost:4000/events/notactive/${props.eventId}`;
    } else {
      url = `http://localhost:4000/events/active/${props.eventId}`;
    }

    const fetchedData = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify({ second_user_id: props.userId }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(response.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function toggleOption() {
    setShowOption((prevOption) => !prevOption);
  }

  const changeJoin = () => {
    if (isDisabled) {
      alert('Nie możesz dołączyć do swojego wydarzenia');
    } else if (props.userId === '') {
      navigate('/loginPage');
    } else {
      fetchChangeJoin();
      setJoined((prevState) => !prevState);
    }
  };

  const deleteEvent = async () => {
    const fetchedData = await fetch(
      `http://localhost:4000/events/${props.eventId}`,
      {
        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(response.statusText);
        }
      })
      .then((responseJson) => {
        alert('Usunięto wydarzenie');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToEdit = () => {
    navigate('/editEvent');
  };

  const goToProfile = () => {
    props.changeProfilePath(eventInfo.creator_id);
    navigate(`/profilePage/${eventInfo.creator_id}`);
  };

  return (
    <div className='event'>
      <div className='event--info'>
        <div className='entry--location'>
          <h1 className='event--location--title'>{eventInfo.gym_name}</h1>
          <div>
            <img className='event--location--pin' src={pin} alt='' />
            <span className='event--location--country'>{eventInfo.city}</span>
          </div>

          <h3 className='event--date'>{eventInfo.date_and_time}</h3>
        </div>
        <br></br>
        <p className='event--info--profile' onClick={goToProfile}>
          Dodano przez:{' '}
          <b>
            {eventInfo.first_name} {eventInfo.last_name}
          </b>
        </p>
        <p>
          Długość treningu: <b>{eventInfo.training_length}</b>
        </p>
      </div>

      <p className='event--description'>{eventInfo.description}</p>

      {joined ? (
        <button className='event--joined' onClick={changeJoin}>
          <span>{buttonText}</span>
        </button>
      ) : (
        <button className='event--join' onClick={changeJoin}>
          <span>Dołącz do wydarzenia</span>
        </button>
      )}

      {isDisabled && (
        <div>
          <img className='event--edit' src={pencil} alt='' onClick={goToEdit} />
          <img
            className='event--delete'
            src={trash}
            alt=''
            onClick={toggleOption}
          />
          {showOption && (
            <div className='event--delete--options'>
              <p>Na pewno?</p>
              <button onClick={deleteEvent}>Tak</button>
              <button onClick={toggleOption}>Nie</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
