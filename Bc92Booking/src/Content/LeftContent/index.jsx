import React from 'react'
import ListSeats from "./ListSeats"

export default function LeftContent() {
    return (
        <div>
            <p className="text-white font-bold text-center text-md">Màn hình</p>
            <div className="screen"></div>
            <ListSeats />
        </div >
    )
}
