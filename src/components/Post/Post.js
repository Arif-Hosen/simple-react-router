import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post;
    const history = useHistory();
    console.log(history);

    const handlePost = () => {
        history.push(`/posts/${id}`)
    }
    return (
        <div>
            <h3>Title: {title}</h3>
            <Link to={`/posts/${id}`}>See Post detail</Link>
            <br />
            <button onClick={handlePost}>Click See post detail</button>
        </div>
    );
};

export default Post;