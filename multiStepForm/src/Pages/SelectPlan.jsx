import { useState } from "react";
import './SelectPlan.css'
import Switch from './Switch'

function SelectPlan(props) {
    const [gamePlan, setGamePlan] = useState('Arcade');

    return (
        <div className="planContainer page">
            <div className="gamePlanContainer">

            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing</p>

            <div className="plans">

            <div className="planCard" onClick={() => setGamePlan('Arcade')}>
                <img src="../assets/images/icon-arcade.svg" alt="Image of arcade video game controller" />

                <div className="description">
                <p className="title">Arcade</p>
                <p className="pricing">$9/mo</p>
                </div>
            </div>
            <div className="planCard" onClick={() => setGamePlan('Advanced')}>
                <img src="../assets/images/icon-advanced.svg" alt="Image of handheld video game controller" />¨
                <div className="description">
                <p className="title">Advanced</p>
                <p className="pricing">$12/mo</p>
                </div>
            </div>
            <div className="planCard" onClick={() => setGamePlan('Pro')}>
                <img src="../assets/images/icon-pro.svg" alt="Image of a third controller" />
                <div className="description">
                <p className="title">Pro</p>
                <p className="pricing">$15/mo</p>
                </div>
            </div>
            </div>
            </div>

            <Switch setYearlyPlan={props.setYearlyPlan}/>
        </div>
    )
}

export default SelectPlan