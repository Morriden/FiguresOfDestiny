import React from 'react'

function Card (props) {
console.log(props)
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id)

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

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
