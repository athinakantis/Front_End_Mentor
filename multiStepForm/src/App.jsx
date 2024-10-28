import { useState } from 'react'
import './App.css'
import StepOverview from './StepOverview'


function App() {
  const [step, setStep] = useState(1)
  const [paymentPlan, setPaymentPlan] = useState('Monthly')

  return (
    <main>
      <StepOverview />
    </main>

  )
}

export default App
