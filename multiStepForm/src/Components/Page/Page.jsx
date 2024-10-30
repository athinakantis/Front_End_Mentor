import PersonalInfo from '../PersonalInfo/PersonalInfo';
import SelectPlan from '../SelectPlan/SelectPlan';
import AddOns from '../AddOnPage/AddOns';
import Summary from '../Summary/Summary';
import Confirmation from '../Confirmation/Confirmation';

function Page(props) {
  if (props.currentStep === 1) {
    return (
      <>
        <PersonalInfo
          currentStep={props.incrementStep}
          incrementStep={props.incrementStep}
        />
      </>
    );
  } else if (props.currentStep === 2) {
    return (
      <>
        <SelectPlan
          gamePlan={props.gamePlan}
          setGamePlan={props.setGamePlan}
          paymentPlan={props.paymentPlan}
          setPaymentPlan={props.setPaymentPlan}
          setStep={props.setStep}
          decrementStep={props.decrementStep}
          incrementStep={props.incrementStep}
        />
      </>
    );
  } else if (props.currentStep === 3) {
    return (
      <>
        <AddOns
          currentPlan={props.currentPlan}
          incrementStep={props.incrementStep}
          decrementStep={props.decrementStep}
          addOns={props.addOns}
          setAddOns={props.setAddOns}
        />
      </>
    );
  } else if (props.currentStep === 4) {
    return (
      <>
        <Summary
          gamePlan={props.gamePlan}
          paymentPlan={props.paymentPlan}
          setPaymentPlan={props.setPaymentPlan}
          setGamePlan={props.setGamePlan}
          incrementStep={props.incrementStep}
          decrementStep={props.decrementStep}
          addOns={props.addOns}
        />
      </>
    );
  }
}

export default Page;
