import React from 'react';
import Song from '../Song';
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import {SongList_Query} from './__generated__/SongList_Query.graphql'
import {SongList_ScoreQuery} from './__generated__/SongList_ScoreQuery.graphql'

import './SongList.css';

const SongsQuery = graphql`
  query SongList_Query {
    songs {
      ...Song_Fragment
    }
  }
`;
const ScoreQuery = graphql`
query SongList_ScoreQuery($userID: String!) {
  userScores(userID: $userID){
    songID
    points
  }
}
`

type SongListProps = {
  userID: string
}

export default function SongList({userID}: SongListProps)
{
    const songData = useLazyLoadQuery<SongList_Query>(SongsQuery, {});
    const scoreData = useLazyLoadQuery<SongList_ScoreQuery>(ScoreQuery, {userID});
    const scoreInfo: {[songID: string]: number} = {}
    scoreData.userScores?.reduce((a, b) => {
      if(b?.songID != null){
        a[b.songID] = b?.points ?? 0;
      }
      return a;
    }, scoreInfo)

    return (
        <div className='list'>
            {songData.songs && songData.songs.map(song => (song && <Song song={song} userID={userID} scoreInfo={scoreInfo}/>))}
        </div>
    );
}