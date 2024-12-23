import React, { useContext } from 'react'
import { DataContext } from './UserContext'

const Footer = () => {

    const data = useContext(DataContext)

  return (
    <div>
        <h1>This is Footer and i {data}</h1>
    </div>
  )
}

export default Footer