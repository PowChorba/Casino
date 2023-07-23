import Navbar from '@/component/Navbar/Navbar'
import s from './page.module.css'
import ProveedorCard from '@/component/Proveedores/ProveedorCard'
import { gamesRequest, providerRequest } from './app.service'
import { GameCardType, ProvedorCardType } from '@/type'
import ProvedorList from '@/component/Proveedores/ProvedorList'
import GamesList from '@/component/Games/GamesList'
import Footer from '@/component/Footer/Footer'
import Mobile from '@/component/Mobile/Mobile'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const providers: ProvedorCardType[] = await providerRequest()
  const games: GameCardType[] = await gamesRequest()


  return (
    <>
    <main className={s.main}>
      <Navbar/>
      <div className={s.divConteiner}>
        <ProvedorList providers={providers} activeProvider='undefined'/>
        <GamesList games={games} />
      </div>  
    <div className={s.mobile}>
      <Mobile/>
    </div>
    <Footer/>
    </main>
    </>
  )
}
