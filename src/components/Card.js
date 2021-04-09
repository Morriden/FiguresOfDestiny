import React from 'react'
import {dragStart, dragOver} from '../functions/drag';

function Card (props) {

    return (
        <div
            id={props.id}
            className={props.className}
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            { props.children }
            Player
        </div>
    )
}

export default Card
