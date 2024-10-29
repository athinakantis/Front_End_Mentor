import PersonalInfo from "./PersonalInfo"
import SelectPlan from "./SelectPlan"

function Page(props) {
    if (props.currentStep === 1) {
        return <SelectPlan currentPlan={props.currentPlan} setYearlyPlan={props.setYearlyPlan}/>
    } else {
        return <PersonalInfo currentStep={props.currentStep} setStep={props.setStep}/>
    }
}

export default Page