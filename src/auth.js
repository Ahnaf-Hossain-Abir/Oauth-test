import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import  Credentials  from "next-auth/providers/credentials";
import { getDevelopers } from "./data/users";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  }, // for working on vercel
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      async authorize(credentials){
        if(credentials===null) return null;
        try{
          const user = getDevelopers(credentials.email);
          if(user){
            const isMatch = user.password=== credentials.password;
            if(isMatch){
              return user;
            } else{
              throw new Error("Password Does not match");
            }
          } else{
            throw new Error("User Is Not Found")
          }
        } catch(error){
          throw new Error(error)
        }
      }
    })
  ],
});

// https://authjs.dev/getting-started/installation
// https://authjs.dev/getting-started/authentication/oauth
// https://next-auth.js.org/providers/google
// https://generate-secret.vercel.app/32 