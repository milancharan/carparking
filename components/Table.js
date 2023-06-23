import React, { useState } from 'react'
import data from '../assets/data.json'
import Slot from './Slot'
import Popup from './Popup'

export default function Table() {

    const [slot, setSlot] = useState(Array(5).fill())
    const [booked, setBooked] = useState(0)
    const [blank, setBlank] = useState(20)
    const [popup, setPopup] = useState(false)
    const [clickedSlot, setClickedSlot] = useState(null)

    const manageClick = (index) => {
        setClickedSlot(index)
        setPopup(true)
    }

    const manageArrival = (carNumber, timeArrival) => {
        const getSlots = [...slot]
        getSlots[clickedSlot] = { carNumber, timeArrival }
        setSlot(getSlots)
        setBooked(booked + 1)
        setBlank(blank - 1)
        setPopup(false)
        setClickedSlot(null)
    }

    return (
        <div>
            <table>
                <tbody>
                    {data.Rows.map((row, rowindex) => (
                        <tr>
                            {slot.map((slot, i) => {
                                const slotNumber = row.Start + i
                                // console.log(slot);
                                return (
                                    <td>(slot && (< Slot carNumber={slot.carNumber} timeArrival={slot.timeArrival} onClick={() => manageClick(i)} />) : {slotNumber})</td>
                                    // <td>{slotNumber}</td>
                                    // console.log(slot.carNumber);
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <p>Booked Slots: {booked}</p>
                <p>Blank Slots: {blank}</p>
            </div>
            {popup && (
                <Popup onArrival={manageArrival}
                    onLeave={() => setPopup(false)} />
            )}
        </div>
    )
}
