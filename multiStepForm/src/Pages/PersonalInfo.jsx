import './PersonalInfo.css'


function PersonalInfo(props) {
    
    return(
        <div className="personalInfoContainer page">
            <div className="formContainer">

            <h2>Personal Info</h2>
            <p className='pageDescription'>Please provide your name, email address, and phone number</p>

            <label htmlFor="nameInput">Name</label>
            <input autoComplete='off' type="text" name='nameInput' id="nameInput" placeholder="e.g. Stephen King"/>
            <label htmlFor="emailInput">Email Address</label>
            <input autoComplete='off' type="email" name="email" id="emailInput" placeholder="e.g. stephenking@lorem.com"/>
            <label htmlFor="phoneInput">Phone Number</label>
            <input autoComplete='off' type="text" name='phoneInput' id='phoneInput' placeholder="e.g. +1 234 567 890"/>
            </div>

            <button type="button" onClick={() => props.setStep(props.currentStep + 1)}>Next Step</button>
        </div>
    )
}

export default PersonalInfo
