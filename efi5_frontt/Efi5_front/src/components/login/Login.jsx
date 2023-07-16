import React from 'react';
import './Login.css'; 
import { useForm } from "react-hook-form"

function Login() {
  
  
    const{ register, handleSubmit } = useForm()
  
    const onSubmit  = async (data) => {
      console.log(data)
     await fetch('http://localhost:5173/login', {
         method: 'POST',
         headers: {
               "Content-type": "application/json",
               "Access-Control-Allow-Origin" : "*", 
  "Access-Control-Allow-Credentials" : true 
              },
         body: JSON.stringify(data),
    })
      .then((response) => console.log(response))
     
    }

    // const onSubmit = async (data) => {
    //   console.log('datando', data);
    //   try {
    //     const response = await fetch('http://localhost:5173/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //       },
    //       body: JSON.stringify(data),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error('Request failed with status ' + response.status);
    //     }
    
    //     const result = await response.json();
    //     console.log(result);
    //   } catch (error) {
    //     console.error(error);
    //     // Handle the error and display an appropriate message to the user
    //   }
    // };
    
    
    // const onSubmit = (data) => {
    //        alert(JSON.stringify(data))
    // }
    

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" {...register('nome')} />
        <label htmlFor="password">Password</label>
        <input type="password" {...register('senha')}/>
        <input type="submit" />
      </form>
    </div>
  );
}

export { Login };