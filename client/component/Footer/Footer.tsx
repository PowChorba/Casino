import s from './Footer.module.css'
import {BiLogoLinkedinSquare, BiLogoGithub, BiLogoGmail, BiPaperclip} from 'react-icons/bi'

export default function Footer(){
    return(<footer className={s.container}>
        <div className={s.divOne}>
            <h4>Our policies</h4>
            <ul className={s.list}>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
                <li>Bonus and Promotion Policy</li>
                <li>Game Policy</li>
                <li>Responsible Gambling</li>
            </ul>
        </div>
        <div className={s.divOne}>
            <h4>Other Links</h4>
            <ul className={s.list}>
                <li>About us</li>
                <li>Fair</li>
                <li>VIP Club</li>
                <li>Promotion</li>
                <li>Affiliate Program</li>
            </ul>
        </div>
        <div className={s.divOne}>
            <a href='https://www.linkedin.com/in/agopchorbadjian/' target='on_blank'><BiLogoLinkedinSquare className={s.icon}/></a>
            <a href='https://www.github.com/PowChorba' target='on_blank'><BiLogoGithub className={s.icon}/></a>
            <a href='mailto:pow.chorba.99@gmail.com' target='on_blank'><BiLogoGmail className={s.icon}/></a>
            <a href="https://profile-web-seven.vercel.app/" target='on_blank'><BiPaperclip className={s.icon}/></a>
        </div>
    </footer>)
}