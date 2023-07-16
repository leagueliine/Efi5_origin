import React from 'react';
import './register.css'; 
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import headphone from "../../assets/headphone.png"


function Register() {

    const{ register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
      await fetch('http://localhost:8080/register', {
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
      <h1 className="login-heading">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" {...register('nome')} />
        <label htmlFor="password">Password</label>
        <input type="password" {...register('senha')}/>
        <label htmlFor="password">Confirm password</label>
        <input type="password" {...register('confirmPass')}/>
        <button type="submit">Login</button>
      </form>
      <div className='div-link'>
      <Link to={'/login'} >Already user?</Link>

      </div>
    </div>
  );
}

export { Register };