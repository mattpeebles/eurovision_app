import React, { SetStateAction, Dispatch } from 'react'
import './NavBar.css';
import { Pages } from '../../enums/Pages';

type NavBarProps = {
    onClick: Dispatch<SetStateAction<Pages>>,
    currentPage?: Pages,
}

export default function NavBar({ onClick, currentPage }: NavBarProps)
{

    return (
        <div className="footer">
            <NavButton
                isSelected={currentPage === Pages.Songs}
                page={Pages.Songs}
                onClick={onClick}
                text="Songs" />
            <NavButton
                isSelected={currentPage === Pages.Stats}
                page={Pages.Stats}
                onClick={onClick}
                text="Stats" />
            <NavButton
                isSelected={currentPage === Pages.Account}
                page={Pages.Account}
                onClick={onClick}
                text="Account" />
        </div>
    )
}

type NavButtonProps = {
    isSelected: boolean,
    page: Pages,
    onClick: Dispatch<SetStateAction<Pages>>,
    text: string
}

function NavButton({ isSelected, page, onClick, text }: NavButtonProps)
{
    return (
        <div className={isSelected ? 'selected' : 'button'} onClick={() => onClick(page)}>
            {text}
        </div>
    )
}