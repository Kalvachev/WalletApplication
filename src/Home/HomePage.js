import React, { useEffect } from 'react'

import CardContent from './CardContent'
import GridLayout from './GridLayout'
import firebase from '../firebase'
import { database } from '../firebase'

export default function HomePage() {
    return (
        <>
            <div >
                <CardContent />
                <GridLayout />
            </div>
        </>
    )
}