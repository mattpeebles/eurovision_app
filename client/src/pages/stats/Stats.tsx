import React, { Suspense } from 'react'
import './Stats.css';
import TotalScoreChart from '../../charts/TotalScoreChart';

export default function Stats()
{
    return (
        <Suspense>
            <TotalScoreChart />
        </Suspense>
    )
}