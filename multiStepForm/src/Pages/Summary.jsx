import './pagesCss/Summary.css'

function Summary(props) {
    let gamePlan;
    const addOns = props.addOns
    props.gamePlan ? gamePlan = props.gamePlan : gamePlan = 'Arcade';
    
    let gamePlanCost;
    if (props.gamePlan === 'Arcade') {
        gamePlanCost = 9
    } else if (props.gamePlan === 'Advanced') {
        gamePlanCost = 12;
    }
    gamePlanCost = 15;

    let totalCost = gamePlanCost
    if (addOns.length === 1) {
        totalCost += addOns[0].price
    } else if (addOns.length > 1) {
        totalCost += addOns.reduce((a,b) => +a.price + +b.price)
    }

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
                        <p className='title'>{gamePlan} ({})</p>
                        <p className='change'>Change</p>
                    </div>
                    <p className='pricing'>${!props.paymentPlan ? `${gamePlanCost}/mo` : `${gamePlanCost * 10}/yr`}</p>
                </div>
            </div>

            {addOns.map(addOn => (
                <div className="addOn" key={`${addOn.serviceName}`}>
                    <p className='service'>{addOn.serviceName}</p>
                    <p className='pricing'>{!props.paymentPlan ? `+$${addOn.price}/mo` : `+$${addOn.price * 10}/yr`}</p>
                </div>
            ))}
        </div>
        <div id="totalCost">
            <p id='total'>Total (per {!props.paymentPlan ? 'month' : 'year'})</p>
            <p className='pricing'>+${totalCost}/{!props.paymentPlan ? 'mo' : 'yr'}</p>
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