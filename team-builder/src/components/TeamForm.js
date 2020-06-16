import React from 'react'

export default function TeamForm(props) {

    const { values, onInputChange, onSubmit } = props

    return (
        <form className='form container'>
            <div className='form-group submit'>
                <h2> Add a Team Member</h2>
                <button>Submit</button>
            </div>

            <div className='form-group inputs'>
                <h4>Info</h4>

                <label>Name:&nbsp;
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        maxLength='50'
                        onInputChange={onInputChange}
                    />
                </label>

                <label>Email:&nbsp;
                    <input
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        maxLength='100'
                        onInputChange={onInputChange}
                    />
                </label>

                <label>
                    <select>
                        name='role'
                        value={values.role}
                        onInputChange={onInputChange}

                        <option value=''>-- Select a Role --</option>
                        <option value='Front End Developer'>Front End Developer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='iOS Developer'>iOS Developer</option>
                        <option value='Android Developer'>Android Developer</option>
                        <option value='Data Scientist'>Data Scientist</option>
                        <option value='UX Designer'>UX Designer</option>
                    </select>
                </label>
            </div>
        </form>
    )
}