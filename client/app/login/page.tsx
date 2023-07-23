'use client'
import Feature from "@/component/Feature/Feature";
import AlreadyLogeed from "@/component/Login/Logeed";
import LoginComponent from "@/component/Login/Login";
import { useSession } from "next-auth/react";

export default function Login(){
    const {data: session, status} = useSession()
    if(status === 'loading'){
        return 
    }
    return(
        <>
            {
                !session 
                ? <LoginComponent/>
                : <AlreadyLogeed/>
            }
            {/* <Feature/> */}
        </>)
}