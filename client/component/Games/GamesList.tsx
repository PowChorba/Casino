'use client'
import { GameCardType } from "@/type"
import GameCard from "./GamesCard"
import s from './Games.module.css'
import {useEffect, useState} from 'react'
import { getMoreGames } from "./helper/helper"
import NotFound from "../NotFound/NotFound"


interface Props {
    games: GameCardType[]
}

export default function GamesList({games}: Props){
    const [search,setSearch] = useState('')
    const [allGames, setAllGames] = useState<GameCardType[]>(games)
    const [counter,setCounter] = useState(2)
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    const getGames = async () => {
        const gamesPage: GameCardType[] = await getMoreGames(counter.toString())
        handleCounter()
        let array: GameCardType[] = []
        array = array.concat(allGames)
        array = array.concat(gamesPage)
        setAllGames(array)
    }
    const filterProviders = allGames?.filter(e => e.title?.toLowerCase().includes(search?.toLowerCase()))

    return(<section className={s.containerList}>
            <div className={s.divInput}>
             <input type="text" value={search} placeholder="Search your favorite game" className={s.inputList} onChange={handleSearch}/>
            </div>
            <h2 className={s.allProviders}>All providers</h2>
            <article className={filterProviders.length === 0 ? s.notFound :s.cardsContainer}>
                {
                    filterProviders.length === 0 
                    ? <NotFound/>
                    : filterProviders.map(e => {
                            return <GameCard key={e.title} title={e.title} img={e.img} proveedor={e.proveedor} />
                        })
                    
                }
                
            </article>
            {
                filterProviders.length !== 0 && <button onClick={() => getGames()} className={s.button}>View more</button>
            }
        </section>)
}