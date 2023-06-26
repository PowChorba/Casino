import { ProvedorCardType } from "@/type";
import Image from "next/image";
import s from './ProveedorCard.module.css'


export default function ProveedorCard({ name, image, games }: ProvedorCardType) {
  return (
    <button className={s.container}>
      <div className={s.divName}>
        <Image src={image} alt={name} width={25} height={25} />
        <h4>{name}</h4>
      </div>
        <span>{games}</span>
    </button>
  );
}
