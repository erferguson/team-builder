import React from "react"; // useState imported 

// State Property set up?
const TeamMember = props => {
    const {name, email, role, id } = props.member; // WHAT IS THIS?

    const [input, setInput] = useState ({
        name:name,
        email:email,
        role:role,
        id:id
    });

    const [editing, setEditing] = useState(false); // WHAT DOES THIS DO?

    const handleEdit = event => {
        setEditing(!editing);
    };

    const inputHandler = event => {
        setInput({...input, [event.target.name]: event.target.value});
    };

    const handleUpdate = event => {
        event.preventDefault();
        props.update(input);
        setEditing(false);
    };

    return editing ? (
        <form onSubmit = {handleChanges}>
            <h1>ADD</h1>
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
                        name='email'
                    />
                </label>
                <label htmlFor='Role'>
                    Role:{''}
                    <input 
                        type='text'
                        value={input.role}
                        onChange={handleChanges}
                        name='role'
                    />
                </label>       
            </div>
            <button>ADD</button>
        </form>
    ) : (
    <div>
      <h3>Name</h3>
      <p>{name}</p>
      <h3>Email</h3>
      <p>{email}</p>
      <h3>Role</h3>
      <p>{role}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
    );

    // return (
    //     <div className="team-list">
    //         {props.team.map(team => (
    //             <div className="note" key={team.id}>
    //                 <h2>{team.title}</h2>
    //                 <p>{team.body}</p>
    //             </div>
    //         ))}
    //     </div>
    // )
};


export default TeamMember;