import { GameCardComplete } from "@/type";
import s from './Slot.module.css'
import Footer from "../../assets/footer.webp";
import Image from "next/image";
import Alien from '../../assets/footerAlien.webp'

interface Props {
    data: GameCardComplete
}

export default function Slot({data}: Props){
    return (<>
            <div className={s.containerIframe}>
            <iframe id="game" src={data?.iframe} className={s.iframe}>
            </iframe>
            </div>
            <div className={s.containerInfo}>
                <h2>{data.title}</h2>
                <span>{data.proveedor}</span>
            </div>
            <div className={s.footer}>
            <Image src={Alien} alt='Alien' className={s.footerAlien}/>
            <Image src={Footer} alt='Alien'/>
            </div>
        </>)
}