import Navbar from "@/component/Navbar/Navbar";
import { individualGame } from "./service/game.service";
import Slot from "@/component/Slot/Slot";

export default async function GamePage({ params }: any) {
  const data = await individualGame(params.id);

  return (
    <main>
      <Navbar />
      <section style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position:'relative'}}>
        <Slot data={data} />
      </section>
    </main>
  );
}
