import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div className='new-container'>
        <h1 className='new-header'>OOPS❗❗</h1>
        <h2 className='new-content' style={{textAlign: 'center'}}>
            Seems like something went wrong 😓<br /><br /><br />
            {err.status} : {err.statusText}<br />
            {err.data}
            </h2>
    </div>
  )
}

export default Error