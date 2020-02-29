import React from 'react'
import NavBar from './NavBar'
import MeteorTable from './MeteorTable'
import MeteorMapMap from './MeteorMapMap'

export default function MeteorMap() {
    return (
        <React.Fragment>
            <NavBar/>
            <MeteorMapMap/>
            <MeteorTable/>
        </React.Fragment>
    )
}
