import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid'
import TeamForm from './components/TeamForm'

//---------------------Fake Data Here---------------------//

const initialTeamData = [
  {
    id: uuid(),
    name: 'Khalil Foulks',
    email: 'khalilfoulks@khalil.com',
    role: 'Student',
  },
]

//-------------------------------------------------------//

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [team, setTeam] = useState(initialTeamData)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt =>{

  }

  const onSubmit = evt =>{

  }

  return (
    <div className="App">
      <header><h1>Team Builder App</h1></header>
      <TeamForm
        values = {formValues}
        onInputChange = {onInputChange}
        onSubmit = {onSubmit}
      
      />
    </div>
  );
}

export default App;
