import { getSession } from "next-auth/react";
import  { NextApiRequest, NextApiResponse } from 'next'


const handler = async (req:NextApiRequest,res:NextApiResponse)=>{

    const session = await getSession({req})
    console.log(session);
    if(session) return res.send(session)

    return res.send("Not authenticated")

}


export default handler;