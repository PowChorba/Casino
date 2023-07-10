import s from './Footer.module.css'
import Alien from '../../assets/footerAlien.webp'
import Image from 'next/image'

export default function Footer(){
    return(<footer className={s.container}><Image src={Alien} alt='Alien'/></footer>)
}