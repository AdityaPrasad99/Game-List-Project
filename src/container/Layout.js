import React from 'react'
import Appbar from '../components/Appbar'
import Homepage from './Homepage'

const Layout = () => {
  return (
    <div className='layout'>
        <Appbar />

        <Homepage />

    </div>
  )
}

export default Layout