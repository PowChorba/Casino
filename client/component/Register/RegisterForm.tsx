'use client'
import { useState } from "react";
import s from "./Register.module.css";
import { registerSubmit } from "./service/register.service";
import { useRouter } from "next/navigation";
import {signIn} from 'next-auth/react'
import { Register } from "@/type";

export default function RegisterForm() {
  const router = useRouter()
  const [error,setError] = useState(false)
  const [errorInput,setErrorInput] = useState<any>('')
  const [register, setRegister] = useState({
    nickname: '',
    email: '',
    password: ''
  })

  const hanldeError = (register: Register) => {
    let error = ''
    if(!register.nickname){
      error = 'Must add a nickname'
    }else if(register.nickname.length > 10){
      error = 'Nickname to long'
    }else if(register.nickname.length < 3){
      error = 'Nickname to short'
    }else if(!/^[a-zA-Z0-9 ]*$/.test(register.nickname)){
      error = 'Nickname cant have special characters'
    }else if(!register.email){
      error = 'Must add an email'
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(register.email)){
      error = 'Email format is invalid'
    }else if(!register.password){
      error = 'Must add a password'
    }else if(register.password.length < 8){
      error = 'Password must have at least 8 characters'
    }else{
      error = ''
    }

    return error
  }


  const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
    setErrorInput(hanldeError({
      ...register,
      [e.target.name]: e.target.value
    }))
    setError(false)
  }

  const handleSubmit = async () => {
    const apiData = await registerSubmit(register)
    if(apiData === 'Nickname already on use'){
      setError(true)
    }else {
      await signIn('credentials', {email: register.email, password: register.password, redirect: false})  
      router.push('/')
    }
  }
 
  return (
    <>
      <input type="text" placeholder="Username" name='nickname' className={s.input} onChange={handleRegister}/>
      <input type="email" placeholder="Email Address" name='email' className={s.input} onChange={handleRegister}/>
      <input type="password" placeholder="Password" name='password' className={s.input} onChange={handleRegister}/>
      <button className={s.buttonCreate} type="submit" disabled={register.email !== '' && register.nickname !== '' && register.password !== '' ? false : true} onClick={handleSubmit}>Create Account</button>
      {
        error && <div className={s.error}>Nickname already on use</div>
      }
      {
        errorInput && <div className={s.error}>{errorInput}</div>

      }
    </>
  );
}
