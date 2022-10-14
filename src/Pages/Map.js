import { useState, useRef, useEffect } from "react"
import { Button } from "../components/Button"
import icon from '../assets/ic_new_white_taxi.png'
import data from "../assets/vehicleCoordinates.json"
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';

export const Map = () =>{

    const view = {
      latitude: -33.876115,
      longitude: 18.5008116,
      zoom: 10
    }
    return(
        <div>
            <ReactMapGL
                initialViewState={view}
                style={{width:"100%", height:"100vh"}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken="pk.eyJ1IjoidHNpa2EiLCJhIjoiY2w5NHNrOW43MGNoZDNubXNoeWcyZnRoaiJ9.Bkqk1xJWUlYt325XSDBXyQ"
                >
                    <Button />
                    {data.map((item, index)=><Marker  style={{background: "#000", display: "flex", justifyContent: "center", width: 50, height: 50}} key={index} longitude={item.longitude} latitude={item.latitude} rotation={item.heading} anchor="center"><img src={icon} width={50} height={50} /></Marker>)}
                    <NavigationControl/>
            </ReactMapGL>
        </div>
    )
}