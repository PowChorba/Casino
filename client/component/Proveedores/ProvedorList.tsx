'use client'
import { ProvedorCardType } from "@/type"
import ProveedorCard from "./ProveedorCard"
import s from './ProveedorCard.module.css'
import {useState} from 'react'
import Link from "next/link"
import Image from 'next/image'
import {HiOutlineBars2} from 'react-icons/hi2'

interface Props {
    providers: ProvedorCardType[],
    activeProvider: string
}

export default function ProvedorList({providers, activeProvider}: Props){
    const [search,setSearch] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    console.log(activeProvider, 'Actiuve Provider')
    const filterProviders = providers.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))

    return(
    <div className={s.containerList}>
        <div className={s.divInput}>
            <input type="text" value={search} placeholder="Search your provider" className={s.inputList} onChange={handleSearch}/>
        </div>
        <Link href='/' className={activeProvider === 'undefined' ? s.activeContainer : s.container}>
        <div className={s.divName}>
            {/* <Image src={image} alt={name} width={25} height={25} /> */}
            <HiOutlineBars2 className={s.bars}/>
            <h4>All providers</h4>
        </div>
            {/* <span>{games}</span> */}
        </Link>
        {
        search === ''
        ? providers.map(e => {
            return <ProveedorCard key={e.name} name={e.name} image={e.image} games={1} activeProvider={activeProvider}/>
          })
        : filterProviders.map(e => {
            return <ProveedorCard key={e.name} name={e.name} image={e.image} games={1} activeProvider={activeProvider}/>
          })
        }
    </div>)
}