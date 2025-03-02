import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
// import FacebookPr ovider from "next-auth/providers/facebook";
// import GithubProvider from "next-auth/providers/github"


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_CLIENT_ID || '',
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET || ''
        // })
    ],
    secret: process.env.SECRET, 
}

export default NextAuth(authOptions); 
   