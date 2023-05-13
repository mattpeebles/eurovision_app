import React from 'react';
import PointFlag from '../point_flag/PointFlag';
import Dropdown from './Dropdown';

type PointFlagDropdownProps = {
    currentPoints: number,
    onChange: (val: number) => void
}

export default function PointFlagDropdown({ currentPoints, onChange }: PointFlagDropdownProps)
{
    const availablePoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(point =>
    {
        return {
            componentFunc: () => <PointFlag score={point} />,
            isSelected: point === currentPoints,
            val: point,
            key: point
        }
    })

    return (
        <div style={{minWidth: '100px'}}>
            <Dropdown
                placeholder='Points'
                children={availablePoints}
                onChange={(val: number) => null}
            />
        </div>
    )
}