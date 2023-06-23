import React from 'react'

export default function Slot({ carNumber, timeArrival, onClick }) {
    return (
        <div className={`slot ${carNumber ? 'Booked' : ''}`} onClick={onClick}>
            {carNumber && (
                <div>
                    <div>{carNumber}</div>
                    <div>{timeArrival}</div>
                </div>
            )}
        </div>
    )
}
