import Navbar from '@/component/Navbar/Navbar'
import s from './page.module.css'
import ProveedorCard from '@/component/Proveedores/ProveedorCard'
import { gamesRequest, providerRequest } from './app.service'
import { GameCardType, ProvedorCardType } from '@/type'
import ProvedorList from '@/component/Proveedores/ProvedorList'
import GamesList from '@/component/Games/GamesList'

export default async function Home() {
  const providers: ProvedorCardType[] = await providerRequest()
  const games: GameCardType[] = await gamesRequest()
  return (
    <main className={s.main}>
      <Navbar/>
      <div className={s.divConteiner}>
        <ProvedorList providers={providers} activeProvider='undefined'/>
        <GamesList games={games} />
      </div>
    </main>
  )
}
