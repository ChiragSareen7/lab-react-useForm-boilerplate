import React, { useState } from 'react';
import {useForm} from 'react-hook-form'

const RegistrationForm = () => {
   const{register,handleSubmit, formState:{errors}}=useForm()
   const[submit,setSubmit]=useState(false)
   const onSubmit=(data)=>{
    console.log(data)
   setSubmit(true)
   }
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      {submit?<div>Registration Successful!😃</div>:null}
        <input type="text" placeholder="Enter Your First Name" {...register("firstName",{required:"Enter first name"})}/>
        <span>{errors.firstName?.message}</span>
        
        <input type="text" placeholder='Enter Your Last Name' {...register("lastName",{required:"Enter last name"})}/>
        <span>{errors.lastName?.message}</span>
        
        <input type="email" placeholder='Enter Your Email' {...register("email",{required:"Enter mail"})}/>
        <span>{errors.email?.message}</span>
        <input type="password" placeholder='Enter Your Password' {...register("password",{required:"Enter password"})}/>
        <span>{errors.password?.message}</span>
        <button>Submit</button>
      </form>
    </div>
  )
};

export default RegistrationForm;
