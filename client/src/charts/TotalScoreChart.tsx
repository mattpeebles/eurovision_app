import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import Songs from '../data/songs/2023';
// import { ValueType } from 'recharts/types/component/DefaultTooltipContent';

// type Scores = {
//     song: Song,
//     total: number,
//     points: {score: number, user: {name: string}}[]
// }

export default function TotalScoreChart()
{
    const data = Songs.map(x => {return {'country': x.country, 'score': 144, 'data': [{'Matt': 12}]}});

    // const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, string | number>) => {
    //     if (active && payload && payload.length) {
    //       return (
    //         <div className="custom-tooltip">
    //           <p className="label">{`${label} : ${payload[0].value}`}</p>
    //           <p className="intro">{label}</p>
    //           <p className="desc">Anything you want can be displayed here.</p>
    //         </div>
    //       );
    //     }
      
    //     return null;
    //   };

    return (
        <ResponsiveContainer width="100%" >
            <BarChart data={data} layout='vertical'>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type='number' />
                <YAxis dataKey="country" type='category' width={120}/>
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}