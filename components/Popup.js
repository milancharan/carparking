import React, { useState } from 'react'

export default function Popup({onArrival, onLeave}) {

    const [carNumber, setCarNumber] = useState('')
    const [timeArrival, setTimeArrival] = useState('')

    const manageBook = (e) => {
        e.preventDefault()
        onArrival(carNumber, timeArrival)
        setCarNumber('')
        setTimeArrival('')
    }

  return (
    <div>
        <form onSubmit={manageBook}>
            <div>
                <label>Car Number: 
                    <input type="text" value={carNumber} onChange={(e)=>setCarNumber(e.target.value)} />
                </label>
            </div>
            <div>
                <label>Arrival Time: 
                    <input type="time" value={timeArrival} onChange={(e)=>setTimeArrival(e.target.value)} />
                </label>
            </div>
            <div>
                <button type='submit'>Book</button>
                <button type='button' onClick={onLeave}>Leave</button>
            </div>
        </form>
    </div>
  )
}
