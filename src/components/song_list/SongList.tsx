import React from 'react';
import Song from '../Song';
import Songs from '../../data/songs/2023';
import './SongList.css';
import Scores from '../../data/scores';

export default function SongList()
{
    const scores = Scores.reduce((scoreDict: {[songID: string]: Score}, score) => {
        scoreDict[score.songID] = score;
        return scoreDict;
    }, {});

    return (
        <div className='list'>
            {Songs.map(song => <Song song={song} score={scores[song.id]}/>)}
        </div>
    );
}