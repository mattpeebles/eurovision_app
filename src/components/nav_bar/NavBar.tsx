import React, { SetStateAction, Dispatch } from 'react'
import './NavBar.css';
import { Pages } from '../../enums/Pages';

type NavBarProps = {
    onClick: Dispatch<SetStateAction<Pages>>,
    currentPage?: Pages,
}

export default function NavBar({onClick, currentPage}: NavBarProps){
    return (
        <div className="footer">
            <div className="button" onClick={() => onClick(Pages.Songs)}>
                Songs
            </div>
            <div className="button"  onClick={() => onClick(Pages.Stats)}>
                Stats
            </div>
            <div className="button"  onClick={() => onClick(Pages.Account)}>
                Account
            </div>
        </div>
    )
}