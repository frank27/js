import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="paragraph">
            <p>This is a user {props.username}.</p>
            <p>Maybe a user : {props.username}.</p>
        </div>
    );
}

export {userOutput as UserOutput};