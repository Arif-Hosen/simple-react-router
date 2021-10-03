import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const FriendDetail = () => {

    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    const history = useHistory();

    const handleClick = () => {
        history.push("/friends");
    }

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <div>

            <h3>Friend detail of: {friendId}</h3>
            <h2>Name: {friend.name}</h2>
            <h3>Phone: {friend.phone}</h3>
            <h4>Website: {friend.website}</h4>
            <p>Works About: {friend.company?.name}</p>
            <br />
            <button onClick={handleClick}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;