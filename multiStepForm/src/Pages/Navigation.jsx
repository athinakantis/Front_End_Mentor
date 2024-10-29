function Navigation(props) {
    return(
        <div className="navigationContainer">
        {props.currentStep > 1 && 
            <button 
            className='goBack' 
            type='button'
            onClick={() => props.setStep(props.currentStep - 1)}>
            Go Back
            </button>}
            
        {props.currentStep < 4 && 
            <button className='nextStep' 
            type='button'
            onClick={() => props.setStep(props.currentStep + 1)}>
            Next Step</button>}

        {props.currentStep === 4 && 
            <button className="confirm" 
            type='button'>
            Confirm</button>}
        </div>
    )
}


export default Navigation;