import { useState } from "react";
import './SelectPlan.css'
import Switch from './Switch'

function SelectPlan(props) {
    const [gamePlan, setGamePlan] = useState('Arcade');

    return (
        <div className="planContainer page">
            <div className="gamePlanContainer">

            <h2>Select your plan</h2>
            <p className="pageDescription">You have the option of monthly or yearly billing</p>

            <div className="plans">

            <div className="planCard" onClick={() => setGamePlan('Arcade')}>
                <img src="../assets/images/icon-arcade.svg" alt="Image of arcade video game controller" />

                <div className="description">
                <p className="title">Arcade</p>
                <p className="pricing">{!props.currentPlan ? '$9/mo' : '$90/yr'}</p>
                {props.currentPlan && <p>2 months free</p>}
                </div>
            </div>
            <div className="planCard" onClick={() => setGamePlan('Advanced')}>
                <img src="../assets/images/icon-advanced.svg" alt="Image of handheld video game controller" />
                <div className="description">
                <p className="title">Advanced</p>
                <p className="pricing">{!props.currentPlan ? '$12/mo' : '$120/yr'}</p>
                {props.currentPlan && <p>2 months free</p>}
                </div>
            </div>
            <div className="planCard" onClick={() => setGamePlan('Pro')}>
                <img src="../assets/images/icon-pro.svg" alt="Image of a third controller" />
                <div className="description">
                <p className="title">Pro</p>
                <p className="pricing">{!props.currentPlan ? '$15/mo' : '$150/yr'}</p>
                {props.currentPlan && <p>2 months free</p>}
                </div>
            </div>
            </div>
            <Switch currentPlan={props.currentPlan} setYearlyPlan={props.setYearlyPlan}/>
            </div>
        
        </div>
    )
}

export default SelectPlan