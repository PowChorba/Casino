"use client";
import s from "./Navbar.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cohete from "../../assets/bets1.png";
import Avatar from '../../assets/avatar.png'
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <div className={s.container}>
      <h1 className={s.title} onClick={() => router.push("/")}>
        Spicy
        <Image src={Cohete} alt="SpicyBets" width={75} height={75} />
        Bets
      </h1>
      <div className={s.right}>
        {/* <select className={s.language}>
          <option value="AR">ES-AR</option>
          <option value="US">EN-US</option>
        </select> */}
        {status === "authenticated" ? (
          <>
            {/* <p>{session.user?.email}</p>*/}
            <Image
              src={session.user?.image ? session.user.image : Avatar}
              alt={session.user?.name ? session.user?.name : "Avatar"}
              width={50}
              height={50}
              className={s.imgProfile}
            />
            <button onClick={() => signOut()} className={s.login}>Sign out</button> 
          </>
        ) : (
          <>
            <button
              onClick={() => router.push("/register")}
              className={s.register}
            >
              Sign Up
            </button>
            <button onClick={() => router.push("/login")} className={s.login}>
              Log In
            </button>
          </>
        )}
      </div>
      <AiOutlineMenu onClick={() => setMenu(!menu)} className={s.bars} />
      {/* {
        menu && <div className={s.menuResponsive}>
          <div className={s.divTop}>
          <AiOutlineClose/>
          <select className={s.language}>
          <option value="AR">ES-AR</option>
          <option value="US">EN-US</option>
        </select>
          </div>
        <Link href='/register' className={s.linksMenu}>Sign Up</Link>
        <Link href='/login' className={s.linksMenu}>Log In</Link>
      </div>
      } */}
    </div>
  );
}
