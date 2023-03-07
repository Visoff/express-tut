import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function submitForm(e) {
    e.preventDefault();
    console.log(form);
    axios.post("http://localhost:8080/registration", form)
  }
  
  return (
    <form onSubmit={submitForm} className="App">
      <input placeholder='email' type="email" name="email" value={form.email} onChange={(e) => {setForm({...form, email:e.target.value})}} />
      <input placeholder='password' type="password" name="password" value={form.password} onChange={(e) => {setForm({...form, password:e.target.value})}} />
      <button>send</button>
    </form>
  )
}

export default App
