import React, { useEffect } from 'react'

import GridLayout from './GridLayout'

export default function HomePage({ allBills, setAllBills }) {
    return (
        <>
            <div >
                <GridLayout allBills={allBills} setAllBills={setAllBills} />
            </div>
        </>
    )
}