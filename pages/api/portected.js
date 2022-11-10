import { getSession } from "next-auth/react";


const handler = async (req,res)=>{

    const session = await getSession({req})
    console.log(session);
    if(session) return res.send(session)

    return res.send("Not authenticated")

}


export default handler;