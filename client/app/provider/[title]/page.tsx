import Navbar from '@/component/Navbar/Navbar'
import s from './page.module.css'
import { ProvedorCardType } from '@/type'
import ProvedorList from '@/component/Proveedores/ProvedorList'
import { providerRequest } from '@/app/app.service'
import { getProvider } from './service/provider.service'
import ProviderGamesList from '@/component/ProviderGame/ProviderGameList'

export default async function ProviderHome({params}: any) {
  const providers: ProvedorCardType[] = await providerRequest()
  const actualProvider = await getProvider(params.title)

  return (
    <section className={s.main}>
      <Navbar/>
      <div className={s.divConteiner}>
        <ProvedorList providers={providers} activeProvider={actualProvider.title}/>
        <ProviderGamesList games={actualProvider.games} activeProvider={actualProvider.title}/>
      </div>
    </section>
  )
}