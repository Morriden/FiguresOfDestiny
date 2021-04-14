import React from 'react'
import BoardSquare from './BoardSquare';
import CitySquare from './CitySquare';
// import { getLocations } from '../functions/fetchcall';

function Board (props) {

    const grid = []
    for(let row = 0; row < 4; row++) {
        grid.push([])
        for(let col = 0; col < 3; col ++) {
            grid[row].push(<BoardSquare> </BoardSquare>)
        }
    }

    return (
        <div className={props.className}>
            <CitySquare>
            </CitySquare>
            { grid }
        </div>
    )
}

export default Board
