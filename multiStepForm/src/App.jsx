import { useState } from 'react'
import './App.css'
import Overview from './Overview'


function App() {
  const [step, setStep] = useState(1)
  const [paymentPlan, setPaymentPlan] = useState('Monthly')

  return (
    <main>
      <Overview currentStep={step}/>

    </main>
  )
}

export default App
