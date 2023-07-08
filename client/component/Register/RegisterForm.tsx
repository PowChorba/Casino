'use client'
import { useState } from "react";
import s from "./Register.module.css";
import { registerSubmit } from "./service/register.service";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter()
  const [error,setError] = useState(false)
  const [register, setRegister] = useState({
    nickname: '',
    email: '',
    password: ''
  })

  const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
    setError(false)
  }

  const handleSubmit = async () => {
    const apiData = await registerSubmit(register)
    if(apiData?.msg){
      setError(true)
    }else {
      router.push('/')
    }
  }
 
  return (
    <>
      <input type="text" placeholder="Username" name='nickname' className={s.input} onChange={handleRegister}/>
      <input type="email" placeholder="Email Address" name='email' className={s.input} onChange={handleRegister}/>
      <input type="password" placeholder="Password" name='password' className={s.input} onChange={handleRegister}/>
      <button className={s.buttonCreate} type="submit" disabled={register.email && register.nickname && register.password ? false : true} onClick={handleSubmit}>Create Account</button>
      {
        error && <div className={s.error}>Email already on use</div>
      }
    </>
  );
}
