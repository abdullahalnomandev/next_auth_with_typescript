import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from 'next-auth/providers/credentials';



export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.Google_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialProvider({
      type:'credentials',
      credentials:{
        email:{
          label:"Email",
          type:"email",
          placeholder:"EE@gmail.com"
        },
        password:{
          label:"Password",
          type:"Password",
          placeholder:"Password"
        }
      },
      authorize:(credentials,req)=>{
        
        const {email,password} = credentials as {
          email:string ,
          password:string
        };

        if(email !=="john@gamil.com" || password !== "1234"){
           throw Error("Invalid Credentials")
        }
        return {id:'1234',name:'John Doe',email:'john@gamil.com'}
      }
    }),

  ],
  pages:{
    signIn:"/login",
    // error:"/error",
    // signOut:"/"
}
};
export default NextAuth(authOptions);
