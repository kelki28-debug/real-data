import React from 'react';
import './Map.css'
import image from '../Map.png'

const Map = () => {
    return (
        <div className='img-container' >
         <img className='map' src={image} alt="map"/>
        </div>
    )
}

export default Map
