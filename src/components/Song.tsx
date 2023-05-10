import React, { useState, useEffect } from 'react';
import getFlagForCountry from '../utils/flags';
import './Song.css'; 
import Link from './link/Link'

type SongProps = {
    participant: Participant
}

export default function Song({ participant }: SongProps)
{
    const { song, country, artist, songUri, flag} = participant;
    
    return (
        <div className='card'>
            <div className='row'>
                {song}
            </div>
            <div className='row'>
                {artist}
            </div>
            <div className='row'>
                <div>
                    <img className='flag' src={getFlagForCountry(flag)} alt="logo" /> {country}
                </div>
                <div className='grow'/>
                <div>
                    <Link link={songUri} text={'Listen'} />
                </div>
            </div>
        </div>
    )
}