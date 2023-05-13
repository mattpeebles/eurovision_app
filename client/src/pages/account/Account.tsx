import React, { Suspense } from 'react'
import './Account.css'
import AccountInfo from '../../components/account_info/AccountInfo'

type AccountProps = {
    userID: string,
    logoutUser: () => void
}

export default function Account({userID, logoutUser}: AccountProps){
    return (
        <div>
            <Suspense>
                <AccountInfo userID={userID} />
            </Suspense>
            <div onClick={logoutUser}>Logout</div>
        </div>
    )
}