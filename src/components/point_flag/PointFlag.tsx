import React from 'react';

type PointFlagProps = {
    score: number
}

const PointColors: {[point: number]: string} = {
    1: 'red',
    2: 'red',
    3: 'red',
    4: 'red',
    5: 'red',
    6: 'red',
    7: 'red',
    8: 'red',
    10: 'red',
    12: 'red',
}

export default function PointFlag({score}: PointFlagProps){
    if(!(score in PointColors)){
        return (null);
    }


    return (
        <div style={{color: PointColors[score]}}>
            {score === 12 ? 'Deux Pois' : score}
        </div>
    )
}