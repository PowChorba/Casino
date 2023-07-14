import Navbar from "@/component/Navbar/Navbar";
import { individualGame } from "./service/game.service";
import Slot from "@/component/Slot/Slot";
import Footer from "@/component/Footer/Footer";

export default async function GamePage({ params }: any) {
  const data = await individualGame(params.id);

  return (
    <main>
      <Navbar />
      <section style={{display:'flex', flexDirection: 'column', justifyContent: 'center', position:'relative', height: '100vh'}}>
        <Slot data={data} />
      </section>
      <Footer/>
    </main>
  );
}
