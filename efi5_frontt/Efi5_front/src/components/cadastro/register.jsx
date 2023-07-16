import React from 'react';
import './register.css'; 
import { useForm } from "react-hook-form"

function Register() {

    const{ register, handleSubmit } = useForm()

    const onSubmit = (event) => {
        alert(JSON.stringify(event))
    }

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form  className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" {...register('nome')} />
        <label htmlFor="password">Password</label>
        <input type="password" {...register('senha')}/>
        <label htmlFor="password">Confirm password</label>
        <input type="password" {...register('confirmPass')}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export { Register };