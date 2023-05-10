import React from 'react';
import Song from '../Song';
import Participants from '../../data/participants/2023';
import './ParticipantList.css';

export default function ParticipantList()
{
    return (
        <div className='list'>
            {Participants.map(participant => <Song participant={participant} />)}
        </div>
    );
}