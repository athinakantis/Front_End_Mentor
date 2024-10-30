import { useState, useEffect } from 'react'
import './mainCss/App.css'
import Overview from './Overview'
import Page from './Pages/Page'

function App() {
  const [step, setStep] = useState(1)
  const [paymentPlan, setPaymentPlan] = useState(false)
  const [addOns, setAddOns] = useState([])
  const [gamePlan, setGamePlan] = useState('')

  useEffect(() => {
    console.log(addOns)
  }, [addOns]);

  function incrementStep() {
    setStep(step => step + 1)
  }

  function decrementStep() {
    setStep(step => step - 1)
  }

  return (
    <main>
      <div className="container">
      <Overview currentStep={step}
            currentPlan={paymentPlan}
      />
      <Page currentStep={step} 
            incrementStep={incrementStep} 
            decrementStep={decrementStep}
            paymentPlan={paymentPlan}
            setPaymentPlan={setPaymentPlan}
            gamePlan={gamePlan}
            setGamePlan={setGamePlan}
            addOns={addOns}
            setAddOns={setAddOns}/>
      </div>
    </main>
  )
}

export default App
