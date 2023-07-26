import { userData } from "@/helper.service";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import TwitchProvider from 'next-auth/providers/twitch'

const handler = NextAuth({
    // const authOptions: NextAuthOptions = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type: 'text'},
                password: { label:'password',type: 'password'}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials.password){
                    throw new Error('Invalid credentials')
                }
                const user = await userData({email: credentials.email, password: credentials.password})
                
                if(user.msg == false){
                    throw new Error('Invalid credentials')
                }else {

                    return user?.findUser[0]
                }
            }
        }),
        GoogleProvider({
            clientId: '303089696961-pctgj1r1o9kd7vdmkgjo63ddk1pnfb80.apps.googleusercontent.com',
            clientSecret: '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'
        }),
        TwitchProvider({
            clientId: 's71ce8awb2g8sk6wxsrqsizxu14bx4',
            clientSecret: 'ay04733298f66plafobzy9reo2va5b'
        })


    ],
    callbacks: {
        jwt({account,token,user,profile,session}){
            if (user) token.user = user
            return token
        },
        session({session,token}){
            return session
        }
    },
    pages: {
        signIn: '/login',
    }
})
// const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}