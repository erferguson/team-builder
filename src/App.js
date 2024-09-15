import React, {useState} from 'react';
import logo from './logo.svg';
import Member from './components/Form';
import Form from './components/Form';

import './App.css';

function App() {
  const [members, setMembers] = useState ([]);

  const submitMember = member => setMembers([...members, member]);
  const update = uMember => 
    setMembers([
      ...members.map(member => {
        if (member.id === uMember.id){
          return uMember;
        }
        return member;
      })
    ]);

  return (
    <div className="App">
      {members.map((member, i)=> (
        <Member member={member} key={i} update={update} />
      ))}
      <Form add={submitMember} />
    </div>
  );
  }

export default App;
