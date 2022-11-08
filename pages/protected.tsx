import { NextPage } from 'next';
import React from 'react';
import { useSession } from 'next-auth/react';

const Protected:NextPage = () => {
    const session = useSession()
    console.log(session);
    
    return (
        <div>
            <h1>This page is protected for special people.</h1>
        </div>
    );
};

export default Protected;