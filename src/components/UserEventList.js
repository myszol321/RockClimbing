import React from 'react';
import Event from './Event';
const axios = require('axios').default;

export default function UserEventList(props) {
  console.log(props);
  const [eventData, setEventData] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`http://localhost:4000/events/user/18`);
      setEventData(res.data);
    };
    fetchProducts();
  }, []);

  const events = eventData.map((entry) => {
    return <Event key={entry.id} {...entry} handleClick={props.handleClick} />;
  });

  return (
    <div>
      <div className='events'>{events}</div>
    </div>
  );
}
