import React, { useState, useEffect } from 'react';
import getFlagForCountry from '../utils/flags';
import './Song.css'; 
import Link from './link/Link'
import PointFlag from './point_flag/PointFlag'

type SongProps = {
    participant: Participant
}

export default function Song({ participant }: SongProps)
{
    const { song, country, artist, songUri, flag} = participant;
    
    return (
        <div className='card'>
            <div className='row'>
                <div>
                    {song}
                    </div>
                    <div className='grow' />
                <PointFlag score={12}/>
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
                    {/* <Link link={songUri} text={'Listen'} /> */}
                </div>
            </div>
        </div>
    )
}