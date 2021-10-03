import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, address, email, phone, website } = props.friend;
    const history = useHistory();

    const friendStyle = {

        border: '2px solid blue',
        borderRadius: '10px',
        margin: '20px'
    }

    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }

    const url = `/friend/${id}`;

    return (
        <div style={friendStyle}>
            <h2>Name: {name} {id}</h2>
            <h5>Call me: {phone}</h5>
            <p>visit: {website}</p>
            <p><small>I live: {address.city}</small> </p>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
                <button>visit me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;