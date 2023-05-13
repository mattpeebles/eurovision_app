import React from 'react';
import getFlagForCountry from '../utils/flags';
import './Song.css';
// import Link from './link/Link'
import PointFlagDropdown from './dropdown/PointFlagDropdown';
import graphql from 'babel-plugin-relay/macro';
import { Song_Fragment$key } from './__generated__/Song_Fragment.graphql';
import { useFragment } from 'react-relay';

type SongProps = {
    song: Song_Fragment$key,
    score?: Score
}


const SongFragment = graphql`
  fragment Song_Fragment on Song {
    title
    artist
    country
  }
`;

export default function Song({ song, score }: SongProps)
{
    const data = useFragment(
        SongFragment,
        song,
      );

    const { title, country, artist } = data;
    
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