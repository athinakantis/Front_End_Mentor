import './Summary.css'

function Summary(props) {
    let gamePlan;
    props.gamePlan ? gamePlan = props.gamePlan : gamePlan = 'Arcade';
    
    
    let cost;
    if (props.gamePlan === 'Arcade') cost = 9;
    else if (props.gamePlan === 'Advanced') cost = 12;
    else cost = 15;

    return (
        <div id="summaryPageContainer" className="page">

        <div id='summaryPage'>
            <div>
                <h2>Finishing up</h2>
                <p className='description'>Double-check everything looks OK before confirming.</p>
            </div>

            <div className="summaryContainer">
            <div className="summary">
                <div className="currentPlan">
                    <div className="service">
                        <p className='title'>{gamePlan} ({!props.paymentPlan ? 'Monthly' : 'Yearly'})</p>
                        <p className='change'>Change</p>
                    </div>
                    <p className='pricing'>${!props.paymentPlan ? `${cost}/mo` : `${cost * 10}/yr`}</p>
                </div>
            </div>

            {props.addOns.map(addOn => (
                <div className="addOn" key={`${addOn.serviceName}`}>
                    <p className='service'>{addOn.serviceName}</p>
                    <p className='pricing'>{!props.paymentPlan ? `+$${addOn.price}/mo` : `+$${addOn.price * 10}/yr`}</p>
                </div>
            ))}
        </div>
        <div id="totalCost">
            <p>Total (per {!props.paymentPlan ? 'Month' : 'Year'})</p>
        </div>
        </div>

        <nav className="navigation">
            <button className="goBack" type="button" onClick={() => props.decrementStep()}>Go Back</button>
            <button id="confirm" type="button">Confirm</button>
        </nav>
    </div>
    )
}

export default Summary;