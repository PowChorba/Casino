import s from "./Login.module.css";
import Link from 'next/link'

export default function LoginComponent() {
  return (
    <>
      <form className={s.form}>
        <h3 className={s.title}>Welcome back</h3>
        <span className={s.text}>continue with</span>
        <div>
          <span>Gmail </span>
          <span>Twitch</span>
        </div>
        <span className={s.text}>or</span>
        <div className={s.divInput}>
          <input
            type="email"
            placeholder="E-mail or Username"
            className={s.input}
          />
        </div>
        <div className={s.divInput}>
          <input type="password" placeholder="Password" className={s.input} />
        </div>
        <button type="submit" className={s.button}>
          Log in
        </button>
        <span className={s.text}>Do not have an account? <Link href='/register' className={s.link}>Sign Up</Link></span>
      </form>
    </>
  );
}
