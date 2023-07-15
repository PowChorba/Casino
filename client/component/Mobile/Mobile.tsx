import Image from "next/image";
import Cohete from '../../assets/cohete.webp'

export default function Mobile(){
    return(<>
        <p>Available for mobile soon!</p>
        <Image src={Cohete} alt='Mobile' width={150} height={150}/>
    </>)
}