import { GameCardComplete } from "@/type";
import s from './Slot.module.css'

interface Props {
    data: GameCardComplete
}

export default function Slot({data}: Props){
    return (<>
            <div className={s.containerIframe}>
            <iframe id="game" width="1000px" height="750px" src={data?.iframe} className={s.iframe}></iframe>
            </div>
            <div className={s.containerInfo}>
                <h2>{data.title}</h2>
                <span>{data.proveedor}</span>
            </div>
        </>)
}