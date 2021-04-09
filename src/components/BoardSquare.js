import React from 'react';
import {drop, dragOver} from '../functions/dropDragOver';


export default function BoardTwo() {

    return <div 
    className="boardpiece"
    onDrop={drop}
    onDragOver={dragOver}
    >
        Board Space
    </div>
}
