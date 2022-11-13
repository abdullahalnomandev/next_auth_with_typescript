import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

const Home: NextPage = () => {


  const postUser = async ()=>{

    const signUpUser= { name:"Nishat Nusrat",email: "banglaesh11@gmail.com",  username: "bangladesh1112", passwrd:"nishatNu112112" 
    }
    try {
      const response = await axios({
        url:"/api/signup",
        method:'post',
        data:signUpUser
      })
      console.log (response?.data  ); // data
      // console.log(response?.errors) ; // errors if any
    } catch (error) {
      console.log("error: " , error);

    }
      
  }


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <button className="bg-green-500 px-4 py-2 rounded text-white hover:bg-red-500 transition " onClick={()=> postUser()}>SUBMIT FORM</button>
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
          <h1>We are leaving in DHAKA CITY</h1>
      </main>
    </div>
  )
}

export default Home
