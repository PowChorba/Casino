'use client'
import { GameCardType } from "@/type"
import s from '../Games/Games.module.css'
import {useEffect, useState} from 'react'
import GameCard from "../Games/GamesCard"


interface Props {
    games: GameCardType[]
}

export default function ProviderGamesList({games}: Props){
    const [search,setSearch] = useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }




    const filterProviders = games.filter(e => e.title?.toLowerCase().includes(search?.toLowerCase()))

    return(<section className={s.containerList}>
            <div className={s.divInput}>
             <input type="text" value={search} placeholder="Search your provider" className={s.inputList} onChange={handleSearch}/>
            </div>
            <article className={s.cardsContainer}>
                {
                    filterProviders.map(e => {
                        return <GameCard key={e.title} title={e.title} img={e.img} proveedor={e.proveedor} />
                    })
                }
            </article>
        </section>)
}