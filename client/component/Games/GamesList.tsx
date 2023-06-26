'use client'
import { GameCardType } from "@/type"
import GameCard from "./GamesCard"
import s from './Games.module.css'
import {useState} from 'react'


interface Props {
    games: GameCardType[]
}

export default function GamesList({games}: Props){
    const [search,setSearch] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const filterProviders = games.filter(e => e.title.toLowerCase().includes(search.toLowerCase()))

    return(<section className={s.containerList}>
            <div className={s.divInput}>
             <input type="text" value={search} placeholder="Search your provider" className={s.inputList} onChange={handleSearch}/>
            </div>
            <article className={s.cardsContainer}>
                {
                    games.map(e => {
                        return <GameCard title={e.title} img={e.img} proveedor={e.proveedor} />
                    })
                }
            </article>
        </section>)
}