import React, { useState } from 'react'
import { Item } from '../Components/Items/Item'
import Card from '../Components/Card/Card'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {

  const[state,setState] = useState("Login")

  const login = async () => {
    console.log("Login",formdata)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdata)
    }).then((res)=>res.json().then((data)=>responseData=data))

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/shop");
    }
    else{
      alert(responseData.errors)
    }
}
  const signup = async () => {
    console.log("Signup", formdata)
    let responseData;
    await fetch('http://localhost:4000/Signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdata)
    }).then((res)=>res.json().then((data)=>responseData=data))

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/shop");
    }
    else{
      alert(responseData.errors)
    }

}

  const  [formdata, setformdata] = useState({
    username:"",
    password:"",
    email:"",
  })

  const changeHandler = (e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <div className="loginsignup">

        <div className="loginSignup-container">
          <h1>{state}</h1>
          <div className="loginSignup-fields">
            {state==="SignUp"?<input name="username" value={formdata.username} onChange={changeHandler} type="text" placeholder='Enter your name' />:<></>}
            <input name ="email" value={formdata.email} onChange={changeHandler} type="email" placeholder='Email Address' />
            <input name ="password" value={formdata.password} onChange={changeHandler} type="password" placeholder='Password' />
          </div>
          <button onClick={() => { if(state === "Login"){login()} else{signup()}}}>Continue</button>
          {state==="SignUp"?<p className='loginSignup-login'> Already have an account? <span onClick={()=>{
            setState("Login")
          }}>Login Here</span></p>:<></>}
          {state==="Login"?<p className='loginSignup-login'> Create an account ? <span onClick={()=>{
            setState("SignUp")
          }}> Click here</span></p>:<></>}
          <div className='loginSignup-agree'>
            <input type="checkbox" />
            <p>By Continuing , i agree to the terms of use & privacy poliicy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
