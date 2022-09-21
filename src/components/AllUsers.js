import React from 'react'
const axios = require('axios').default;

export default function AllUsers(props) {
    const [starWarsData, setStarWarsData] = React.useState({})

    React.useEffect(() => {
        const fetchProducts = async () => {
            // setLoading(true);
            const res = await axios.get(
                "http://localhost:4000/users/"
            );
            setStarWarsData(res.data);
            // setLoading(false);
            console.log(res)
            console.log(res.data)
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    );
}