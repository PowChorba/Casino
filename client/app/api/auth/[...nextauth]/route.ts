import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitchProvider from "next-auth/providers/twitch";
import CredetialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "1066952343200-c4llm6kcd91rrufb7sm9sdlcl6c5fqqc.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    TwitchProvider({
      clientId: "process.env.TWITCH_CLIENT_ID",
      clientSecret: "process.env.TWITCH_CLIENT_SECRET",
    }),
    CredetialsProvider({
        name: 'credentials',
        credentials:{
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            const user = {id: '1',name: 'asd', email: 'asd@a.com'}

            if(user){
                return user
            }else {
                return null
            }
        }
    })
  ],
});

export { handler as GET, handler as POST };
