import React from 'react';
import Song from '../Song';
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import {SongList_Query} from './__generated__/SongList_Query.graphql'

import './SongList.css';

const SongsQuery = graphql`
  query SongList_Query {
    songs {
      ...Song_Fragment
    }
  }
`;

export default function SongList()
{
    const data = useLazyLoadQuery<SongList_Query>(SongsQuery, {});
    
    return (
        <div className='list'>
            {data.songs && data.songs.map(song => (song && <Song song={song}/>))}
        </div>
    );
}