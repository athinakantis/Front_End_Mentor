import AddOn from "./AddOn";
import './pagesCss/AddOns.css'

function AddOns(props) {
    return (
        <div className="page">
            <div className="addOnsContainer">

            <h2>Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experience</p>

            <div className="addOnContainer">
                <AddOn 
                addOns={props.addOns}
                setAddOns={props.setAddOns}
                serviceName='Online Service'
                description='Access to multiplayer games'
                currentPlan={props.currentPlan}
                price='1'
                />
                <AddOn 
                addOns={props.addOns}
                setAddOns={props.setAddOns}
                serviceName='Larger Storage'
                description='Extra 1TB of cloud save'
                currentPlan={props.currentPlan}
                price='2'
                />
                <AddOn
                addOns={props.addOns}
                setAddOns={props.setAddOns} 
                serviceName='Customizable Profile'
                description='Custom theme on your profile'
                currentPlan={props.currentPlan}
                price='2'
                />
            </div>
            </div>

            <nav className="navigation">
            <button className="goBack" type="button" onClick={() => props.decrementStep()}>Go Back</button>
            <button className="nextStep" type="button" onClick={() => props.incrementStep()}>Next Step</button>
            </nav>
        </div>
    )
}

export default AddOns;