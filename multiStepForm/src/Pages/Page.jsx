import PersonalInfo from "./PersonalInfo"
import SelectPlan from "./SelectPlan"
import AddOns from "./AddOns"

function Page(props) {
    if (props.currentStep === 1) {
        return (
            <>
            <AddOns currenPlan={props.currenPlan}
            setStep={props.setStep}
            addOns={props.addOns}
            setAddOns={props.setAddOns}/>
            </>
        ) 
        
    } else if (props.currentStep === 2) {
        return (
            <>
            <SelectPlan yearlyPlan={props.currentPlan} 
            setYearlyPlan={props.setYearlyPlan}
            setStep={props.setStep}/>
            </>
        ) 
    } else if (props.currentStep === 3) {
        return (
            <>
            <PersonalInfo currentStep={props.currentStep} setStep={props.setStep}/>
            </>
        )
    }
}

export default Page