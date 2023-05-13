import React from 'react';
import getFlagForCountry from '../utils/flags';
import './Song.css';
// import Link from './link/Link'
import PointFlagDropdown from './dropdown/PointFlagDropdown';
import graphql from 'babel-plugin-relay/macro';
import { Song_Fragment$key } from './__generated__/Song_Fragment.graphql';
import { useFragment, useMutation } from 'react-relay';

type SongProps = {
    song: Song_Fragment$key,
    scoreInfo: {[songID: string]: number}
    userID: string
}


const SongFragment = graphql`
  fragment Song_Fragment on Song {
    id
    title
    artist
    country
  }
`;

const EnsurePointsMutations = graphql`
mutation Song_Mutation($userID: String!, $songID: String!, $points: Int!){
    ensureScore(userID: $userID, songID: $songID, points: $points){
        points
    }
}
`

export default function Song({ song, scoreInfo, userID }: SongProps)
{
    const data = useFragment(
        SongFragment,
        song,
      );
      const [commitMutation, isMutationInFlight] = useMutation(EnsurePointsMutations);

    const { title, country, artist, id } = data;
    const score = scoreInfo[id] ?? 0;
    const onPointsChange = function(newPoints: Number) {
        commitMutation({
            variables: {
                points: newPoints,
                songID: id,
                userID
            }
        })
    }

    return (
        <div className='card'>
            <div className='row'>
                <div>
                    {title}
                </div>
                <div className='grow' />
                <PointFlagDropdown 
                    currentPoints={score}
                    onChange={onPointsChange}
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