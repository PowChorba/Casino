'use client'
import { ProvedorCardType } from "@/type"
import ProveedorCard from "./ProveedorCard"
import s from './ProveedorCard.module.css'
import {useState} from 'react'

interface Props {
    providers: ProvedorCardType[]
}

export default function ProvedorList({providers}: Props){
    const [search,setSearch] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const filterProviders = providers.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))

    return(
    <div className={s.containerList}>
        <div className={s.divInput}>
            <input type="text" value={search} placeholder="Search your provider" className={s.inputList} onChange={handleSearch}/>
        </div>
        <button className={s.container}>
        <div className={s.divName}>
            {/* <Image src={image} alt={name} width={25} height={25} /> */}
            <h4>All providers</h4>
        </div>
            {/* <span>{games}</span> */}
        </button>
        {
        search === ''
        ? providers.map(e => {
            return <ProveedorCard name={e.name} image={e.image} games={1}/>
          })
        : filterProviders.map(e => {
            return <ProveedorCard name={e.name} image={e.image} games={1}/>
          })
        }
    </div>)
}