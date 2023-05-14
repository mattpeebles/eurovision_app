import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { TotalScoreChart_Query } from './__generated__/TotalScoreChart_Query.graphql';
// import { ValueType } from 'recharts/types/component/DefaultTooltipContent';

const RankingsQuery = graphql`
  query TotalScoreChart_Query {
    rankings {
        songID
        total
        scores {
            userID
            points
        }
      }
      songs {
        country
        title
        artist
        id
      }
  }
`

export default function TotalScoreChart()
{
    const data = useLazyLoadQuery<TotalScoreChart_Query>(RankingsQuery, {});
    // const data = Songs.map(x => {return {'country': x.country, 'score': 144, 'data': [{'Matt': 12}]}});

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

    
    if(data?.rankings == null){
        return <div></div>
    }
 
    const info = [];

    for(const song of (data?.songs ?? [])){
        console.log(data.songs)
        info.push(
            {
                songID: song?.id ?? '',
                country: song?.country ?? '',
                total: data.rankings.filter(x => x?.songID === song?.id)[0]?.total ?? 0
            }
        )
    }
    
    return (
        <ResponsiveContainer width="100%" >
            <BarChart data={info} layout='vertical'>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type='number' />
                <YAxis dataKey="country" type='category' width={120}/>
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}