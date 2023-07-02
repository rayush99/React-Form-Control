import React from 'react'

const Form = () => {
  return (
    <form>
        <div className='form-field'>
        <label id='name'>Name</label>
        <input type='text' name='name' />
        </div>
        <div className='form-field'>
        <label id='address'>Address</label>
        <input type='text' name='address'/>
        </div>
        <div className='form-field'>
        <label id='phone'>Phone No</label>
        <input type='text' name='phone'/>
        </div>
        <div className='form-field'>
        <label id='email'></label>
        <input type='text' name='email'/>
        </div>
    </form>
  )
}

export default Form