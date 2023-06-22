'use client'
import s from './Navbar.module.css'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

export default function Navbar() {
  const router = useRouter()


  return (
    <div className={s.container}>
      <h1 className={s.title}>SpicyBets</h1>
      <div className={s.right}>
        <select className={s.language}>
          <option value="AR">ES-AR</option>
          <option value="US">EN-US</option>
        </select>
        <button className={s.register}>Registrarse</button>
        <button onClick={() => router.push('/login')} className={s.login}>Iniciar sesion</button>
      </div>
    </div>
  );
}