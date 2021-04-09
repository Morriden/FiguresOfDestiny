import React from 'react'
import BoardSquare from './BoardSquare';
import Card from './Card';

function Board (props) {
    // const drop = e => {
    //     e.preventDefault();
    //     const card_id = e.dataTransfer.getData('card_id');

    //     const card = document.getElementById(card_id);
    //     card.style.display = 'block';

    //     e.target.appendChild(card);
    // }

    // const dragOver = e => {
    //     e.preventDefault();

    // }

    const grid = []
    for(let row = 0; row < 4; row++) {
        grid.push([])
        for(let col = 0; col < 3; col ++) {
            grid[row].push(<BoardSquare />)
        }
    }

    return (
        <div 
        // id={props.id}
        className={props.className}
        // onDrop={drop}
        // onDragOver={dragOver}
        >
            { grid }
            { props.children }
            <Card id="card-1" className="card" draggable="true">
          </Card>
        </div>
    )
}

export default Board
