import React from 'react'
import './AccountInfo.css'
import { useLazyLoadQuery } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { AccountInfo_Query } from './__generated__/AccountInfo_Query.graphql'

type AccountInfoProps = {
    userID: string
}

const AccountInfoQuery = graphql`
    query AccountInfo_Query($userID: String!){
        me(userID: $userID) {
            name
        }
    }
`

export default function AccountInfo({userID}: AccountInfoProps){
    const data = useLazyLoadQuery<AccountInfo_Query>(AccountInfoQuery, {userID})
    
    return (
        <div>
            {data.me && data.me.name}
        </div>
    )
}