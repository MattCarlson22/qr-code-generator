import React from 'react'

const Form = () => {
  return (
    <div>
        <form className='url'>
            <label>
                URL:&nbsp;
                <input type='text' name='url' />
            </label>
            <input type='submit' value='Submit✅'/>
        </form>
    </div>
  )
}

export default Form