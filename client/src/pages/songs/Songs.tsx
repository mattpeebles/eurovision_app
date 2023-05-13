import React, { Suspense } from 'react'
import './Songs.css';
import SongList from '../../components/song_list/SongList';

type SongsPageProps = {
    userID: string
}

export default function SongsPage({userID}: SongsPageProps){   
    return (
        <Suspense>
            <SongList userID={userID}/>
        </Suspense>
    )
}