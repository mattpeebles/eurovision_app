import React from 'react'
import './UserSelector.css';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { UserSelector_Query } from './__generated__/UserSelector_Query.graphql';

const UsersQuery = graphql`
    query UserSelector_Query {
        users {
            id
            name
        }
    }
`

type UserSelectorProps = {
    onChange: (userId: string) => void
}

export default function UserSelector({onChange}: UserSelectorProps){   
    const data = useLazyLoadQuery<UserSelector_Query>(UsersQuery, {});
    
    return (
        <div>
            User Selector
            
                {data.users && data.users.map(user => (user && 
                <div onClick={() => onChange(user.id ?? '')}><div>{user.name}</div></div>))}
            </div>
    )
}