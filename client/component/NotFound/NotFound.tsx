import Image from "next/image";
import Roll from '../../assets/search-casino-fc49d3d7.png'
import s from './NotFound.module.css'

export default function NotFound(){
    return(<div className={s.container}>
        <Image src={Roll} alt='NotFound'/>
        <p className={s.results}>No results found</p>
        <span className={s.spaan}>Try to refine your search or filter it to find what you are looking for</span>
        <span className={s.spaan}>We are still adding games, the will soon be available</span>
    </div>)
}