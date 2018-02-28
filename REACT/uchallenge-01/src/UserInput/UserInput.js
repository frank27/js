import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" value={props.username} onChange={props.changedUsername}/>
        </div>
    )
};

export default userInput;