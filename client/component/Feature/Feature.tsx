'use client'
import { useRouter } from 'next/navigation'
import s from './Feature.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import Alien from '../../assets/availabe.webp'

export default function Feature(){
    const router = useRouter()
    return<div className={s.container}>
        Available soon!
        <div className={s.divClose}>
          <AiOutlineClose onClick={() =>router.push('/')}/>
        </div>
        <Image src={Alien} alt='Alien'/>
    </div>
}