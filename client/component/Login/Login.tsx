'use client'
import { useState } from "react";
import s from "./Login.module.css";
import Link from 'next/link'
import { loginService } from "./service/login.service";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from 'react-icons/ai'


export default function LoginComponent() {
  const router = useRouter()
  const [error,setError] = useState(false)
  const [login,setLogin] = useState({
    email: "",
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await loginService(login)
    if(!data?.msg){
      setError(true)
    }else {
      router.push('/')
    }
  }

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.divClose}>
          <AiOutlineClose onClick={() =>router.push('/')}/>
        </div>
        <h3 className={s.title}>Welcome back</h3>
        <span className={s.text}>continue with</span>
        <div>
        <svg width="34" height="34" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                <path d="M2 10C2 7.19974 2 5.79961 2.54497 4.73005C3.02433 3.78924 3.78924 3.02433 4.73005 2.54497C5.79961 2 7.19974 2 10 2H12C14.8003 2 16.2004 2 17.27 2.54497C18.2108 3.02433 18.9757 3.78924 19.455 4.73005C20 5.79961 20 7.19974 20 10V12C20 14.8003 20 16.2004 19.455 17.27C18.9757 18.2108 18.2108 18.9757 17.27 19.455C16.2004 20 14.8003 20 12 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12V10Z" fill="white"></path>
                <path d="M7.65943 12.2517L7.24173 13.811L5.71505 13.8433C5.25879 12.997 5 12.0288 5 10.9999C5 10.005 5.24197 9.06674 5.67087 8.2406H5.6712L7.03038 8.48979L7.62578 9.84081C7.50116 10.2041 7.43324 10.5941 7.43324 10.9999C7.43329 11.4404 7.51307 11.8623 7.65943 12.2517Z" fill="#FBBB00"></path>
                <path d="M16.8951 9.87909C16.964 10.242 16.9999 10.6169 16.9999 11C16.9999 11.4295 16.9548 11.8485 16.8687 12.2527C16.5767 13.6281 15.8135 14.8291 14.7562 15.6789L14.7559 15.6786L13.044 15.5913L12.8017 14.0787C13.5032 13.6673 14.0514 13.0235 14.3402 12.2527H11.1319V9.87909H14.387H16.8951Z" fill="#518EF8"></path>
                <path d="M14.7559 15.6787L14.7563 15.679C13.728 16.5055 12.4219 17 11 17C8.7151 17 6.72853 15.7229 5.71512 13.8435L7.6595 12.2518C8.16619 13.6041 9.47069 14.5668 11 14.5668C11.6574 14.5668 12.2732 14.3891 12.8017 14.0788L14.7559 15.6787Z" fill="#28B446"></path>
                <path d="M14.8296 6.3813L12.8859 7.9726C12.339 7.63075 11.6925 7.43326 10.9999 7.43326C9.43591 7.43326 8.10702 8.44006 7.62571 9.84084L5.6711 8.24063H5.67078C6.66935 6.31537 8.68097 5 10.9999 5C12.4557 5 13.7905 5.51857 14.8296 6.3813Z" fill="#F14336"></path>
            </svg> 
            <svg width="34" height="34" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                <path d="M2 10C2 7.19974 2 5.79961 2.54497 4.73005C3.02433 3.78924 3.78924 3.02433 4.73005 2.54497C5.79961 2 7.19974 2 10 2H12C14.8003 2 16.2004 2 17.27 2.54497C18.2108 3.02433 18.9757 3.78924 19.455 4.73005C20 5.79961 20 7.19974 20 10V12C20 14.8003 20 16.2004 19.455 17.27C18.9757 18.2108 18.2108 18.9757 17.27 19.455C16.2004 20 14.8003 20 12 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12V10Z" fill="#9146FF"></path>
                <path d="M16.1429 11.2857L14.0857 13.3428H12.0286L10.2285 15.1428V13.3428H7.91425V5.62854H16.1429V11.2857Z" fill="white"></path>
                <path d="M7.39998 4.59998L4.82855 7.1714V16.4285H7.91427V19L10.4857 16.4285H12.5428L17.1714 11.8V4.59998H7.39998ZM16.1428 11.2857L14.0857 13.3428H12.0286L10.2286 15.1428V13.3428H7.91427V5.62855H16.1428V11.2857Z" fill="black"></path>
                <path d="M14.6 7.42853H13.5715V10.5142H14.6V7.42853Z" fill="black"></path>
                <path d="M11.7715 7.42853H10.7429V10.5142H11.7715V7.42853Z" fill="black"></path>
              </svg> 
        </div>
        <span className={s.text}>or</span>
        <div className={s.divInput}>
          <input
            type="email"
            placeholder="E-mail or Username"
            name='email'
            className={s.input}
            onChange={handleChange}
          />
        </div>
        <div className={s.divInput}>
          <input type="password" placeholder="Password" name='password' className={s.input} onChange={handleChange}/>
        </div>
        <button type="submit" className={s.button} disabled={login.email && login.password ? false :true}>
          Log in
        </button>
        {
          error && <div className={s.error}>Email and password dont match</div>
        }
        <span className={s.text}>Do not have an account? <Link href='/register' className={s.link}>Sign Up</Link></span>
      </form>
    </>
  );
}
