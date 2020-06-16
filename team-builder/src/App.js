import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid'
import TeamForm from './components/TeamForm'
import TeamMember from './components/TeamMember'

//---------------------Fake Data Here---------------------//

const initialTeamData = [
  {
    id: uuid(),
    name: 'Khalil Foulks',
    email: 'khalilfoulks@khalil.com',
    role: 'Front End Developer',
  },
]

//-------------------------------------------------------//

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [teamData, setTeamData] = useState(initialTeamData)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('')

  const onInputChange = evt =>{
    //debugger
    const { name, value } = evt.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt =>{
    // console.log('submitting')
    // debugger

    evt.preventDefault()
    if(!formValues.name || !formValues.email|| !formValues.role){
      setError('Must Fill Out All Fields')
      return     
    }

    const newTeamMember = {...formValues, id: uuid() }

    setTeamData([...teamData, newTeamMember])
    setTeamData(team =>[newTeamMember, ...teamData])

    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <header><h1>Team Builder App</h1></header>
      <span style={{color:'red'}}> {error} </span> 
      <TeamForm
        values = {formValues}
        onInputChange = {onInputChange}
        onSubmit = {onSubmit}
      />

      {
        teamData.map(team => {
          return(
            <TeamMember key={team.id} info={team} />
          )
        })
      }
    </div>
  );
}

export default App;
