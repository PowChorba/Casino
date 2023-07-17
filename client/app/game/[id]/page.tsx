import Navbar from "@/component/Navbar/Navbar";
import { individualGame } from "./service/game.service";
import Slot from "@/component/Slot/Slot";
import Footer from "@/component/Footer/Footer";
import s from './page.module.css'
import Mobile from "@/component/Mobile/Mobile";

export default async function GamePage({ params }: any) {
  const data = await individualGame(params.id);

  return (
    <main>
      <Navbar />
      <section className={s.container}>
        <Slot data={data} />
      </section>
      <div className={s.mobile}>
        <Mobile/>
      </div>
      <Footer/>
    </main>
  );
}
