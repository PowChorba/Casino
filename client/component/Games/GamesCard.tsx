import { GameCardType } from "@/type";
import Image from "next/image";
import s from './Games.module.css'
import Link from "next/link";

export default function GameCard({title, img, proveedor}: GameCardType){
    return(<Link href={`/${title}`} className={s.container}>
        {/* <h4>{title}</h4> */}
        <Image src={img} alt={title} width={175} height={175}/>
        {/* <span>{proveedor}</span> */}
    </Link>)
}

{/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14 fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> */}