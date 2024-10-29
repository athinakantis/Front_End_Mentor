import { useState } from "react";
import './SelectPlan.css'
import Switch from './Switch';
import PlanCard from "./PlanCard";

function SelectPlan(props) {
    const [gamePlan, setGamePlan] = useState('Arcade');

    return (
        <div className="planContainer page">
            <div className="gamePlanContainer">
            <h2>Select your plan</h2>
            <p className="pageDescription">You have the option of monthly or yearly billing</p>

            <div className="plans">
                <PlanCard
                    gamePlan={gamePlan}
                    setGamePlan={setGamePlan}
                    yearlyPlan={props.yearlyPlan}
                    plan='Arcade'
                    alt='Image of arcade video game controller'
                    monthPrice='9'
                    yearPrice='90'
                ></PlanCard>
                <PlanCard
                    gamePlan={gamePlan}
                    setGamePlan={setGamePlan}
                    yearlyPlan={props.yearlyPlan}
                    plan='Advanced'
                    alt='Image of handheld video game controller'
                    monthPrice='12'
                    yearPrice='120'
                ></PlanCard>
                <PlanCard
                    gamePlan={gamePlan}
                    setGamePlan={setGamePlan}
                    yearlyPlan={props.yearlyPlan}
                    plan='Pro'
                    alt='Image of a third controller'
                    monthPrice='15'
                    yearPrice='150'
                ></PlanCard>
            </div>
            <Switch currentPlan={props.yearlyPlan} setYearlyPlan={props.setYearlyPlan}/>
            </div>
        
            <nav className="navigation">
            <button className="goBack" type="button" onClick={() => props.setStep(props.currentStep - 1)}>Go Back</button>
            <button className="nextStep" type="button" onClick={() => props.setStep(props.currentStep + 1)}>Next Step</button>
            </nav>
        </div>
    )
}

export default SelectPlan