import { ProvedorCardType } from "@/type";
import Image from "next/image";
import s from './ProveedorCard.module.css'
import Link from "next/link";


export default function ProveedorCard({ name, image, games,activeProvider }: ProvedorCardType) {
  return (
    <Link href={`/provider/${name}`} className={activeProvider === name ? s.activeContainer :s.container}>
      <div className={s.divName}>
        <Image src={image} alt={name} width={25} height={25} />
        <h4>{name}</h4>
      </div>
    </Link>
  );
}
