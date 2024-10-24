import { useState } from 'react';

const EvaluateRuleForm = () => {
  const [formData, setFormData] = useState({ age: '', department: '', income: '' });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/evaluate-rule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data.eligible ? 'Eligible' : 'Not Eligible');
    } catch (error) {
      console.error('Error evaluating rule:', error);
    }
  };

  return (
    <div>
      <h2>Evaluate Rule</h2>
      <form onSubmit={handleSubmit}>
        <label>Age: </label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} /><br />
        
        <label>Department: </label>
        <input type="text" name="department" value={formData.department} onChange={handleChange} /><br />
        
        <label>Income: </label>
        <input type="number" name="income" value={formData.income} onChange={handleChange} /><br />

        <button type="submit">Submit</button>
      </form>
      
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default EvaluateRuleForm;
