import React from 'react'

type LoginProps = {
    setLoggedIn: () => any
}

export default function Login({setLoggedIn}: LoginProps){
    return (
        <div>
            <div onClick={setLoggedIn}>Login</div>
        </div>
    )
}