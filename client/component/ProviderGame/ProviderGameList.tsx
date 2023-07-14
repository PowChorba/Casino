'use client'
import { GameCardType } from "@/type"
import s from '../Games/Games.module.css'
import {useEffect, useState} from 'react'
import GameCard from "../Games/GamesCard"
import NotFound from "../NotFound/NotFound"


interface Props {
    games: GameCardType[]
    activeProvider: string
}

export default function ProviderGamesList({games, activeProvider}: Props){
    const [search,setSearch] = useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }




    const filterProviders = games.filter(e => e.title?.toLowerCase().includes(search?.toLowerCase()))

    return(<section className={s.containerList}>
            <div className={s.divInput}>
             <input type="text" value={search} placeholder="Search your provider" className={s.inputList} onChange={handleSearch}/>
            </div>
            <h2 className={s.allProviders}>{activeProvider}</h2>
            <article className={filterProviders.length === 0 ? s.notFound :s.cardsContainer}>
                {
                    filterProviders.length === 0 
                    ? <NotFound/>
                    : filterProviders.map(e => {
                            return <GameCard key={e.title} title={e.title} img={e.img} proveedor={e.proveedor} />
                        })
                    
                }
                
            </article>
        </section>)
}