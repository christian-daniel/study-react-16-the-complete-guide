import React from 'react';

const UserInput = (props) => {

    const style = {
        align: "center",
        background: "gray",
        width: "50%",
        margin: "20px auto",
        border: "dashed",
    };

    return (
        <div style={style}>
            <input style={{background:"none", width: "100%"}} value={props.username} onChange={props.handler}/>
        </div>
    );
};

export default UserInput;