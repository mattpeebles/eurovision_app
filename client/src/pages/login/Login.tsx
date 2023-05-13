import React, { Suspense, useState } from 'react'
import UserSelector from '../../user_selector/UserSelector'

type LoginProps = {
    setLoggedIn: (userID: string) => any
}

export default function Login({setLoggedIn}: LoginProps){   
    return (
        <div>
            <Suspense>
                <UserSelector onChange={setLoggedIn}/>
            </Suspense>
        </div>
    )
}