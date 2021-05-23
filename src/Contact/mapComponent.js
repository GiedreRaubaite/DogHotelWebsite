import React from "react"
import { Map, Marker } from "pigeon-maps"

export function MyMap() {
    return (
        <Map height={300} defaultCenter={[54.68707721129384, 25.281091440855413]} defaultZoom={11}>
            <Marker width={50} anchor={[54.68707721129384, 25.281091440855413]} />
        </Map>
    )
}