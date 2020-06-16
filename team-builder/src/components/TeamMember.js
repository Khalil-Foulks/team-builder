import React from 'react'

export default function TeamMember(props) {
    const { info } = props

    if(!info){
        return <h3>Fetching Team Member&apos;s info</h3>
    }

    return(
        <div className='teamMember container'>
            <h2>{info.name}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
        </div>
    )
}