import React, { Suspense } from 'react'
import './Songs.css';
import SongList from '../../components/song_list/SongList';

export default function SongsPage(){   
    return (
        <Suspense>
            <SongList />
        </Suspense>
    )
}