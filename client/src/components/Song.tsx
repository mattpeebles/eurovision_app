import React from 'react';
import getFlagForCountry from '../utils/flags';
import './Song.css';
// import Link from './link/Link'
import PointFlagDropdown from './dropdown/PointFlagDropdown';

type SongProps = {
    song: Song,
    score?: Score
}

export default function Song({ song, score }: SongProps)
{
    const { title, country, artist } = song;
    
    return (
        <div className='card'>
            <div className='row'>
                <div>
                    {title}
                </div>
                <div className='grow' />
                <PointFlagDropdown 
                    currentPoints={score?.score ?? 0}
                    onChange={(newPoint: number) => null}
                />
            </div>
            <div className='row'>
                {artist}
            </div>
            <div className='row'>
                <div>
                    <img className='flag' src={getFlagForCountry(country)} alt="logo" /> {country}
                </div>
                <div className='grow' />
                <div>
                    {/* <Link link={songUri} text={'Listen'} /> */}
                </div>
            </div>
        </div>
    )
}