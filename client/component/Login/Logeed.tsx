'use client'
import s from './Login.module.css'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Avatar from '../../assets/avatar.png'
import { useRouter } from "next/navigation";
import { AiOutlineClose } from 'react-icons/ai'

export default function AlreadyLogeed(){
    const {data: session} = useSession()
    const router = useRouter()
    return(<>
        <div className={s.form}>
        <div className={s.divClose}>
          <AiOutlineClose onClick={() =>router.push('/')}/>
        </div>
            <p>You are already loged</p>
            <Image src={session?.user?.image ? session.user.image : Avatar} alt={session?.user?.name ? session.user.name : 'Avatar'} width={150} height={150} className={s.imagenUser}/>
            <button onClick={() => signOut()} className={s.button}>Log out</button>
        </div>
    </>)
}