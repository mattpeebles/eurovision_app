import React from 'react';

type LinkProps = {
    link: string,
    text: string
}

export default function Link({link, text}: LinkProps){
    return (
        <a 
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.youtube.com/watch?v=${link}`}>{text}</a>
    )
}