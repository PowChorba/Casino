import { GameCardType } from "@/type";
import Image from "next/image";
import s from './Games.module.css'
import Link from "next/link";

export default function GameCard({title, img, proveedor}: GameCardType){
    return(<Link href={`/game/${title}`} className={s.container}>
        {/* <h4>{title}</h4> */}
        <Image src={img} alt={title} width={175} height={175}/>
        {/* <span>{proveedor}</span> */}
    </Link>)
}
