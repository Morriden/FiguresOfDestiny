import React from 'react';
import Card from './Card';
import {drop, dragOver} from '../functions/dropDragOver';

export default function CitySquare() {

    return <div
    className="city"
    onDrop={drop}
    onDragOver={dragOver}
    >
        I'm a city
        <Card id="card-1" className="card" draggable="true"></Card>
       
    </div>
}