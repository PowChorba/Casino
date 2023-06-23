'use client'
import Link from "next/link";
import s from './Register.module.css'
import {useState} from 'react'
import RegisterForm from "./RegisterForm";

export default function RegisterComponent() {
  const [email, setEmail] = useState(false)
  
    return (
    <section className={s.container}>
      <article className={s.divLeft}>
        <h3 className={s.title}>Welcome to SpicyBets!</h3>
        <span>Safe and innovative gambling platform</span>
      </article>
      <article className={s.divRight}>
        <div className={s.divRightTop}>
            <h3 className={s.title}>Sign Up</h3>
            {
                !email ? <p>continue with</p> : <p>with E-mail</p>
            }
        </div>
        <div className={s.divRightCenter}>
        {
            !email 
            ? <>
            <button className={s.buttonSocial}>Google</button>
            <button className={s.buttonSocial}>Twitch</button>
            <p>or</p>
            <button className={s.buttonSocial} onClick={() => setEmail(true)}>E-mail</button>
            <p>
              By continuing, you agree to{" "}
              <Link href="/conditions">Terms of service</Link> and{" "}
              <Link href="/privacy">Privacy Policy</Link> and you confirm that you
              are 18+ years old.
            </p>
            </>
            : <RegisterForm/> 
        }
        </div>
          <div className={s.divRightBottom}>
          <span className={s.login}>
            Already have an accout? <Link href="/login">Log in</Link>
          </span>
          </div>
      </article>
    </section>
  );
}
