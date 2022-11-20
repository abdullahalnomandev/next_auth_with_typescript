import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.Google_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    }),
    
    CredentialProvider({
      type: "credentials",
      credentials: {},
      authorize: (credentials, req) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        return { id: "", email: email, password: password };
      }
    }),
    

    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD
    //     }
    //   },
    //   from: process.env.EMAIL_FROM
    // })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login"
    // error:"/error",
    // signOut:"/"
  },

  callbacks:{
    async jwt({token, user, account, profile, isNewUser}){
      
        if(user){
          token.id= user.id;
        }
        return token;
    },
    async session({ session, user, token }:any) {
      
      session.user.id = token.id;
      return session
    },
  },

};
export default NextAuth(authOptions);


