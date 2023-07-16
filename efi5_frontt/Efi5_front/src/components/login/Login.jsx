import React from 'react';
import './Login.css'; 
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import headphone from "../../assets/headphone.png"

function Login() {
  
  
    const{ register, handleSubmit } = useForm()
  
   const onSubmit = async (data) => {
     await fetch('http://localhost:8080/login', {
         method: 'POST',
         headers: {
               "Content-Type": "application/json",
              },
         body: JSON.stringify(data),
    })
      .then((response) => response.json()).then((res) => console.log(res))
    }
   
  return (
    <div className="login-container">
      <img className='phone' src={headphone} />
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" {...register('nome')} />
        <label htmlFor="password">Password</label>
        <input type="password" {...register('senha')}/>
        <button type='submit'>Enviar</button>
      </form>
      <div className='div-link'>
      <Link to={'/register'} >Register here!</Link>
      </div>
    </div>
  );
}

export { Login };