import React, { useState } from 'react';

const Forms = (props) => {

    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Forms;