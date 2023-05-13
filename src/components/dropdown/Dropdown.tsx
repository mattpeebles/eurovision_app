import React, { useMemo, useEffect, useState, useRef } from 'react';
import './Dropdown.css';

type DropdownChild<T> = {
    componentFunc: () => React.JSX.Element, isSelected: boolean, val: T, key: number
}

type DropdownProps<T> = {
    placeholder: string,
    children: DropdownChild<T>[],
    onChange: (newValue: T) => void
}

const Icon = () =>
{
    return (
        <svg height="20" width="20" viewBox="0 0 20 20">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
    );
};

export default function Dropdown<T>({ placeholder, children, onChange }: DropdownProps<T>)
{
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedChild] = useState<DropdownChild<T>>(children.filter(x => x.isSelected)[0]);
    const inputRef = useRef(null);

    useEffect(() =>
    {
        const handler = (e: MouseEvent) =>
        {
            if (!(inputRef.current as (HTMLBodyElement | null))?.contains(e.target as HTMLBodyElement))
            {
                setShowMenu(false);
            }
        }

        window.addEventListener('click', handler);
        return () =>
        {
            window.removeEventListener("click", handler);
        }
    });

    const handleInputClick = (e: React.MouseEvent) =>
    {
        setShowMenu(!showMenu);
    }

    const getDisplay = useMemo(() =>
    {
        return selectedValue.componentFunc();
    }, [selectedValue]);

    const onItemClick = (child: DropdownChild<T>) =>
    {
        setSelectedChild(child);
        onChange(child.val);
    }

    const isSelected = (child: DropdownChild<T>) =>
    {
        return selectedValue === child;
    }

    return (
        <div className="dropdown-container">
            <div ref={inputRef} className="dropdown-input" onClick={handleInputClick}>
                <div className="dropdown-selected-value">{getDisplay}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon />
                    </div>
                </div>
            </div>
            {showMenu && <div className="dropdown-menu">
                {children.map(child => (
                    <div
                        key={child.key}
                        className={`dropdown-item ${isSelected(child) && "selected"}`}
                        onClick={() => onItemClick(child)}
                    >
                        {child.componentFunc()}
                    </div>
                ))}
            </div>}
        </div>
    );
}