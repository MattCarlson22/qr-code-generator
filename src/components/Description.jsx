import React from 'react'
import Form from './Form'

const Description = () => {
  return (
    <div>
        <h3 className='description'>
            This is a QR Code Generator that I made using
            the <a href='https://reactjs.org'>React Framework</a> for the Harvard class <a href='https://cs50.harvard.edu'>CS50</a>, which
            I took online through <a href='https://www.edx.org/'>edX</a>. To generate a QR Code, enter a URL into the text box below and press Submit✅.
        </h3>
        <Form />
    </div>
  )
}

export default Description