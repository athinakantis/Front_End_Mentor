

function PersonalInfo(props) {
    return(
        <div className="container">
            <h2>Personal Info</h2>
            <p>Please provide your name, email address, and phone number</p>

            <label htmlFor="nameInput">Name</label>
            <input type="text" name='nameInput' id="nameInput"/>
            <label htmlFor="emailInput">Email Address</label>
            <input type="email" name="email" id="emailInput" />
            <label htmlFor="phoneInput">Phone Number</label>
            <input type="text" name='phoneInput' id='phoneInput' placeholder="e.g. +1 234 567 890"/>

            <button type="button" onClick={() => setStep(step + 1)}>Next Step</button>
        </div>
    )
}

export default PersonalInfo;