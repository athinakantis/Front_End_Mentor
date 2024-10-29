import { useState } from 'react'
import './App.css'
import Overview from './Overview'
import Page from './Pages/Page'

function App() {
  const [step, setStep] = useState(1)
  const [yearlyPlan, setYearlyPlan] = useState(false)

  return (
    <main>
      <div className="container">
      <Overview currentStep={step}/>
      <Page currentStep={step} 
            currentPlan={yearlyPlan}
            setStep={setStep} 
            setYearlyPlan={setYearlyPlan}/>
      </div>
    </main>
  )
}

export default App
