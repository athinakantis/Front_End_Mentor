import { useState } from 'react';
import './PersonalInfo.css';

function PersonalInfo(props) {
  const [nameError, setNameError] = useState(true)
  const [emailError, setEmailError] = useState(true)
  const [numError, setNumError] = useState(true)

  function checkName(e) {
    if (e.target.value.length < 1) {
      setNameError('This field is required')
    } else {
      setNameError('')
    }
  }

  function checkEmail(e) {
    if (e.target.validity.typeMismatch || e.target.length < 1) {
      setEmailError('This field is required')
    } else {
      setEmailError('')
    }
  }

  function checkPhone(e) {
    if (e.target.value.length < 1) {
      setNumError('This field is required')
    } else {
      setNumError('')
    }
  }

  function validateInput() {
    if (nameError) {
      setNameError('This field is required')
    } else if (emailError) {
      setEmailError('This field is required')
    } else if (numError) {
      setNumError('This field is required')
    } else {
      props.incrementStep()
    }
  }

  return (
    <section id='personalInfoContainer' className='page'>
      <div className='formContainer'>
        <h2>Personal Info</h2>
        <p className='pageDescription'>
          Please provide your name, email address, and phone number
        </p>

        <div className="inputInfo">
        <label htmlFor='nameInput'>Name</label>
        {nameError && <p className='error'>{nameError}</p>}
        </div>
        <input
          autoComplete='off'
          type='text'
          name='nameInput'
          id='nameInput'
          placeholder='e.g. Stephen King'
          onInput={(e) => checkName(e)}
        />
        <div className="inputInfo">
        <label htmlFor='emailInput'>Email Address</label>
        {emailError && <p className='error'>{emailError}</p>}
        </div>
        <input
          autoComplete='off'
          type='email'
          name='email'
          id='emailInput'
          placeholder='e.g. stephenking@lorem.com'
          onInput={(e) => checkEmail(e)}
        />
        <div className="inputInfo">
        <label htmlFor='phoneInput'>Phone Number</label>
        {numError && <p className='error'>{numError}</p>}
        </div>
        <input
          autoComplete='off'
          type='text'
          name='phoneInput'
          id='phoneInput'
          placeholder='e.g. +1 234 567 890'
          onInput={(e) => checkPhone(e)}
        />
      </div>

      <nav>
        <button 
        id='nextStep'
        onClick={validateInput}
        >Next Step</button>
      </nav>
    </section>
  );
}

export default PersonalInfo;
