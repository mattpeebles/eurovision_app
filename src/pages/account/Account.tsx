import React, { Dispatch, SetStateAction } from 'react'
import './Account.css'

type AccountProps = {
    name: string,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export default function Account({name, setIsLoggedIn: logout}: AccountProps){
    return (
        <div>
            {name}
            <div onClick={() => logout(false)}>Logout</div>
        </div>
    )
}