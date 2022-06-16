import React, { Fragment } from 'react'
import Description from './Description'

const Header = () => {
  return (
    <Fragment>
        <h1 className='title'>🖥️ QR Code Generator 🖥️</h1>
        <Description />
    </Fragment>
  )
}

export default Header