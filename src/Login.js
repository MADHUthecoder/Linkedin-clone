import React, { useState } from 'react'
import "./Login.css"
import linkedimg from './images/Linkedin.png'

function Login() {
    const [email, setEmail]= useState("");
    const [fname, setFName]= useState("");
    const [password, setPassword]= useState("");
    const [lname, setLName]= useState("");

    const register= () =>{
      if (!fname){
        return alert("Please Enter your Name!");
      }
    };

    const logintoapp= (e) =>{
        e.preventDefault();
    };

  return (
    <div className='login'>
      <img src={linkedimg} alt=''/>
      <h2>Make the most of your Professional Life</h2>
      <form>
        <input placeholder='First Name' value={fname} onChange={e => setFName(e.target.value)} type='text' />
        <input type='text' value={lname} onChange={e => setLName (e.target.value)} placeholder='Last Name (optional)'/>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
        <button type='submit' onClick={logintoapp}>Sign In</button>
      </form>
      <p>Not a Member? 
        <span className='login_register' onClick={register}> Register Now</span>
      </p>
    </div>
  )
}

export default Login
