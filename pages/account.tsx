import React from 'react';
import { useSession } from 'next-auth/react';

const Account = () => {

    const{data,}=useSession();
    console.log(data);
    
    return (
        <div>
            <h1 className='text-center text-green-500 text-3xl mt-5 font-bold'>THis is account Page</h1>
        </div>
    );
};

export default Account;

