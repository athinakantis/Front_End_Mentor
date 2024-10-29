import { useState } from 'react'
import './App.css'
import Overview from './Overview'
import Page from './Pages/Page'

function App() {
  const [step, setStep] = useState(1)
  const [paymentPlan, setPaymentPlan] = useState('Monthly')

  return (
    <main>
      <div className="container">
      <Overview currentStep={step}/>
      <Page currentStep={step} setStep={setStep} setPaymentPlan={setPaymentPlan}/>
      </div>
    </main>
  )
}

export default App
