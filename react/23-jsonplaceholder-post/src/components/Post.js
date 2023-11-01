import React from 'react';
import './Post.css'

function Post(props) {
    const {title, id, userId, body} = props
    return (

        <div className='post' /* style={{
            border: "1px solid red",
            margin: '10px auto',
            padding: '10px',
            width: '80%',
        }}*/>
            <small>{id}</small>
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>User id :{userId}</h3>
        </div>
    );
}

export default Post;
