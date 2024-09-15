import React, { useState } from 'react';

const Member = props => {

    const [input, setInput] = useState( {
        name:'',
        role:'', 
        email:'', 
        id: null
    });

    const handleChanges = event => {
        setInput( {...input, [event.target.name]: event.target.value} )
    };

    const submitForm = event => {
        event.preventDefault();
        props.add({...input, id: Math.random() }); // math.radom? 
        setInput({
            name:'',
            role:'', 
            email:'', 
            id: null
        }); 
    };

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="title">Name</label>
            <h1>ADD NEW</h1>
            <div>
                <label htmlFor='Name'>
                    Name:{" "}
                    <input
                        type='text'
                        value={input.name}
                        onChange={handleChanges}
                        name='name'
                    />
                </label>
                <label htmlFor='Email'>
                    Email:{" "}
                    <input
                        type='text'
                        value={input.email}
                        onChange={handleChanges}
                        name="email"
                    />
                </label>
                <label htmlFor='Role'>
                    Role:{" "}
                    <input
                        type='text'
                        value={input.role}
                        onChange={handleChanges}
                        name='role'
                    />
                </label>
            </div>
            <button>DO NOT CLICK</button>    
        </form>
    );
};

export default Member;
