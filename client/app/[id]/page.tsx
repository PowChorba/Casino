import Navbar from "@/component/Navbar/Navbar";
import { individualGame } from "./service/game.service";
import Slot from "@/component/Slot/Slot";

export default async function GamePage({ params }: any) {
  const data = await individualGame(params.id);

  return (
    <main>
      <Navbar />
      <section>
        <Slot data={data} />
      </section>
    </main>
  );
}
