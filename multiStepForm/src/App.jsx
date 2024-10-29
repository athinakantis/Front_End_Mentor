import { useState } from 'react'
import './App.css'
import Overview from './Overview'
import Page from './Pages/Page'

function App() {
  const [step, setStep] = useState(1)
  const [yearlyPlan, setYearlyPlan] = useState(false)
  const [addOns, setAddOns] = useState([])

  return (
    <main>
      <div className="container">
      <Overview currentStep={step}
            currentPlan={yearlyPlan}
      />
      <Page currentStep={step} 
            currentPlan={yearlyPlan}
            setStep={setStep} 
            setYearlyPlan={setYearlyPlan}
            addOns={addOns}
            setAddOns={setAddOns}/>
      </div>
    </main>
  )
}

export default App
