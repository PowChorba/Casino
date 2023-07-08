'use client'
import { GameCardType } from "@/type"
import GameCard from "./GamesCard"
import s from './Games.module.css'
import {useEffect, useState} from 'react'
import { getMoreGames } from "./helper/helper"


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

    // useEffect(() => {
        // const getGames = async () => {
        //     const gamesPage: GameCardType[] = await getMoreGames(counter.toString())
        //     console.log(gamesPage)
        //     let array: GameCardType[] = []
        //     array = array.concat(allGames)
        //     array = array.concat(gamesPage)
        //     setAllGames(array)
        // }
    //     getGames()
    //     console.log(allGames, 'asdsadsadad')
    // }, [counter])

    const filterProviders = allGames.filter(e => e.title?.toLowerCase().includes(search?.toLowerCase()))

    return(<section className={s.containerList}>
            <div className={s.divInput}>
             <input type="text" value={search} placeholder="Search your provider" className={s.inputList} onChange={handleSearch}/>
            </div>
            <article className={s.cardsContainer}>
                {
                    filterProviders.map(e => {
                        return <GameCard title={e.title} img={e.img} proveedor={e.proveedor} />
                    })
                }
            </article>
            <button onClick={() => getGames()} className={s.button}>View more</button>
        </section>)
}