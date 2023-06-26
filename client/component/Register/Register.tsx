'use client'
import Link from "next/link";
import s from './Register.module.css'
import {useState} from 'react'
import RegisterForm from "./RegisterForm";
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai'
import {useRouter} from 'next/navigation'

export default function RegisterComponent() {
  const [email, setEmail] = useState(false)
  const router = useRouter()
  
    return (
    <section className={s.container}>
      <div className={s.divClose}>
        <AiOutlineClose onClick={() =>router.push('/')}/>
      </div>
      <article className={s.divLeft}>
        <h3 className={s.title}>Welcome to SpicyBets!</h3>
        <span>Safe and innovative gambling platform</span>
      </article>
      <article className={s.divRight}>
          {
            email && 
            <AiOutlineArrowLeft className={s.arrowBack} onClick={() => setEmail(false)}/>
          }
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
            <button className={s.buttonSocial}>
            <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                <path d="M2 10C2 7.19974 2 5.79961 2.54497 4.73005C3.02433 3.78924 3.78924 3.02433 4.73005 2.54497C5.79961 2 7.19974 2 10 2H12C14.8003 2 16.2004 2 17.27 2.54497C18.2108 3.02433 18.9757 3.78924 19.455 4.73005C20 5.79961 20 7.19974 20 10V12C20 14.8003 20 16.2004 19.455 17.27C18.9757 18.2108 18.2108 18.9757 17.27 19.455C16.2004 20 14.8003 20 12 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12V10Z" fill="white"></path>
                <path d="M7.65943 12.2517L7.24173 13.811L5.71505 13.8433C5.25879 12.997 5 12.0288 5 10.9999C5 10.005 5.24197 9.06674 5.67087 8.2406H5.6712L7.03038 8.48979L7.62578 9.84081C7.50116 10.2041 7.43324 10.5941 7.43324 10.9999C7.43329 11.4404 7.51307 11.8623 7.65943 12.2517Z" fill="#FBBB00"></path>
                <path d="M16.8951 9.87909C16.964 10.242 16.9999 10.6169 16.9999 11C16.9999 11.4295 16.9548 11.8485 16.8687 12.2527C16.5767 13.6281 15.8135 14.8291 14.7562 15.6789L14.7559 15.6786L13.044 15.5913L12.8017 14.0787C13.5032 13.6673 14.0514 13.0235 14.3402 12.2527H11.1319V9.87909H14.387H16.8951Z" fill="#518EF8"></path>
                <path d="M14.7559 15.6787L14.7563 15.679C13.728 16.5055 12.4219 17 11 17C8.7151 17 6.72853 15.7229 5.71512 13.8435L7.6595 12.2518C8.16619 13.6041 9.47069 14.5668 11 14.5668C11.6574 14.5668 12.2732 14.3891 12.8017 14.0788L14.7559 15.6787Z" fill="#28B446"></path>
                <path d="M14.8296 6.3813L12.8859 7.9726C12.339 7.63075 11.6925 7.43326 10.9999 7.43326C9.43591 7.43326 8.10702 8.44006 7.62571 9.84084L5.6711 8.24063H5.67078C6.66935 6.31537 8.68097 5 10.9999 5C12.4557 5 13.7905 5.51857 14.8296 6.3813Z" fill="#F14336"></path>
            </svg>  
              Google
              <span className={s.spanButton}>asd</span>
              </button>
            <button className={s.buttonSocial}>
              <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                <path d="M2 10C2 7.19974 2 5.79961 2.54497 4.73005C3.02433 3.78924 3.78924 3.02433 4.73005 2.54497C5.79961 2 7.19974 2 10 2H12C14.8003 2 16.2004 2 17.27 2.54497C18.2108 3.02433 18.9757 3.78924 19.455 4.73005C20 5.79961 20 7.19974 20 10V12C20 14.8003 20 16.2004 19.455 17.27C18.9757 18.2108 18.2108 18.9757 17.27 19.455C16.2004 20 14.8003 20 12 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12V10Z" fill="#9146FF"></path>
                <path d="M16.1429 11.2857L14.0857 13.3428H12.0286L10.2285 15.1428V13.3428H7.91425V5.62854H16.1429V11.2857Z" fill="white"></path>
                <path d="M7.39998 4.59998L4.82855 7.1714V16.4285H7.91427V19L10.4857 16.4285H12.5428L17.1714 11.8V4.59998H7.39998ZM16.1428 11.2857L14.0857 13.3428H12.0286L10.2286 15.1428V13.3428H7.91427V5.62855H16.1428V11.2857Z" fill="black"></path>
                <path d="M14.6 7.42853H13.5715V10.5142H14.6V7.42853Z" fill="black"></path>
                <path d="M11.7715 7.42853H10.7429V10.5142H11.7715V7.42853Z" fill="black"></path>
              </svg>  
              Twitch
              <span className={s.spanButton}>asd</span>
              </button>
            <p>or</p>
            <button className={s.buttonSocial} onClick={() => setEmail(true)}>
              <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                  <path d="M10.1177 10.7832C10.5877 11.0815 11.4124 11.0815 11.8825 10.7831C11.8826 10.7831 11.8827 10.783 11.8828 10.783L19.8937 5.6991C19.6309 4.9757 18.9087 4.45456 18.0606 4.45456H3.93949C3.09134 4.45456 2.36912 4.9757 2.10632 5.6991L10.1174 10.783C10.1175 10.7831 10.1176 10.7831 10.1177 10.7832Z" fill="currentColor"></path>
                  <path d="M12.4677 11.6184C12.4676 11.6184 12.4675 11.6185 12.4675 11.6185C12.0561 11.8796 11.5279 12.0101 11 12.0101C10.4719 12.0101 9.94404 11.8796 9.5326 11.6185C9.53253 11.6185 9.5325 11.6184 9.53243 11.6184L2 6.83823V15.4415C2 16.4594 2.87002 17.2876 3.93944 17.2876H18.0606C19.13 17.2876 20 16.4594 20 15.4415V6.83823L12.4677 11.6184Z" fill="currentColor"></path>
              </svg>
              E-mail
              <span className={s.spanButton}>asd</span>
            </button>
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
