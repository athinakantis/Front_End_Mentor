import './SelectPlan.css'
import Switch from './Switch';
import PlanCard from "./PlanCard";

function SelectPlan(props) {
    return (
        <div className="planContainer page">
            <div className="gamePlanContainer">
            <h2>Select your plan</h2>
            <p className="pageDescription">You have the option of monthly or yearly billing</p>

            <div className="plans">
                <PlanCard
                    gamePlan={props.gamePlan}
                    setGamePlan={props.setGamePlan}
                    paymentPlan={props.paymentPlan}
                    setPaymentPlan={props.setPaymentPlan}
                    plan='Arcade'
                    alt='Image of arcade video game controller'
                    monthPrice='9'
                    yearPrice='90'
                ></PlanCard>
                <PlanCard
                    gamePlan={props.gamePlan}
                    setGamePlan={props.setGamePlan}
                    paymentPlan={props.paymentPlan}
                    setPaymentPlan={props.setPaymentPlan}
                    plan='Advanced'
                    alt='Image of handheld video game controller'
                    monthPrice='12'
                    yearPrice='120'
                ></PlanCard>
                <PlanCard
                    gamePlan={props.gamePlan}
                    setGamePlan={props.setGamePlan}
                    paymentPlan={props.paymentPlan}
                    setPaymentPlan={props.setPaymentPlan}
                    plan='Pro'
                    alt='Image of a third controller'
                    monthPrice='15'
                    yearPrice='150'
                ></PlanCard>
            </div>
            <Switch paymentPlan={props.paymentPlan} setPaymentPlan={props.setPaymentPlan}/>
            </div>
        
            <nav className="navigation">
            <button className="goBack" type="button" onClick={() => props.decrementStep()}>Go Back</button>
            <button className="nextStep" type="button" onClick={() => props.incrementStep()}>Next Step</button>
            </nav>
        </div>
    )
}

export default SelectPlan