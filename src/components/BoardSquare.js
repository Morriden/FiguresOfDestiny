import React, {useEffect, useState} from 'react';
import {drop, dragOver} from '../functions/dropDragOver';
import { getLocations } from '../functions/fetchcall';


export default function BoardTwo() {

    const [boardSpaceInformation, setBoardSpaceInformation] = useState({locationTitle: '', locationImage: ''});

    useEffect(() => {
        getLocations()
            .then(res => {setBoardSpaceInformation(res[0])})
    }, [])

    //Why is the fetch call an array?

    return <div 
    className="boardpiece"
    onDrop={drop}
    onDragOver={dragOver}
    >
        <div>Title: {boardSpaceInformation.locationTitle}</div>
        <div>Image: {boardSpaceInformation.locationImage}</div>
        Board Space
    </div>
}
