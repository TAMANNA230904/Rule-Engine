import { useState } from 'react'
import './App.css'
import axios from 'axios'
import EvaluateRuleForm from './components/RuleForm.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>User Eligibility Rule Evaluation</h1>
       <EvaluateRuleForm/> 
    </>
  )
}

export default App
