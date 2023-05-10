import React, { useState, useEffect } from 'react';
import getFlagForCountry from '../utils/flags';
import './Song.css';
import Link from './link/Link'
import PointFlag from './point_flag/PointFlag'

type SongProps = {
    song: Song,
    score?: Score
}

export default function Song({ song, score }: SongProps)
{
    const { id, title, country, artist, songUri, flag } = song;
    return (
        <div className='card'>
            <div className='row'>
                <div>
                    {title}
                </div>
                <div className='grow' />
                
                {score?.score != null && <PointFlag score={score.score} />}
            </div>
            <div className='row'>
                {artist}
            </div>
            <div className='row'>
                <div>
                    <img className='flag' src={getFlagForCountry(flag)} alt="logo" /> {country}
                </div>
                <div className='grow' />
                <div>
                    {/* <Link link={songUri} text={'Listen'} /> */}
                </div>
            </div>
        </div>
    )
}