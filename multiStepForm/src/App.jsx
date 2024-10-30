import { useState } from 'react';
import './App.css';
import Overview from './Components/Overview/Overview';
import Page from './Components/Page/Page';
import Confirmation from './Components/Confirmation/Confirmation';

function App() {
  const [step, setStep] = useState(1);
  const [paymentPlan, setPaymentPlan] = useState(false);
  const [addOns, setAddOns] = useState([]);
  const [gamePlan, setGamePlan] = useState('');

  function incrementStep() {
    setStep((step) => step + 1);
  }

  function decrementStep() {
    setStep((step) => step - 1);
  }

  return (
    <main>
      <div id='mainContainer'>
        <Overview currentStep={step} currentPlan={paymentPlan} />

        <Page
          currentStep={step}
          incrementStep={incrementStep}
          decrementStep={decrementStep}
          paymentPlan={paymentPlan}
          setPaymentPlan={setPaymentPlan}
          gamePlan={gamePlan}
          setGamePlan={setGamePlan}
          addOns={addOns}
          setAddOns={setAddOns}
        />
      </div>
    </main>
  );
}

export default App;