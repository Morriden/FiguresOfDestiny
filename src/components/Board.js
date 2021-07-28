import React, { useEffect, useState} from 'react';
import './Board.css';
import BoardSquare from './BoardSquare';
// import CitySquare from './CitySquare';
import { getLocations } from '../functions/fetchcall';

const verticalAxis = [1, 2, 3, 4, 5]
const horizontalAxis = ["a", "b", "c", "d", "e"]

function shuffle(array) {
    var m = array.length, t, i;

    while(m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function Board (props) {

    const [boardSpaceInformation, setBoardSpaceInformation] = useState([]);

    useEffect(() => {
        getLocations()
            .then(res => shuffle(res))
            .then(res => {setBoardSpaceInformation(res)})
    }, [])

    // // let locationTitle = boardSpaceInformation.map(function(info) {
    // //     return info.locationTitle;
    // // });

     function findSingleLocation(array) {
         for (let i = 0; i < array.length; i++) {
        let item = array.shift([i]);
        // setBoardSpaceInformation(array.shift[i])
        console.log(item, 'here 2')
        return item;
    }}
    
    let board = [];
    

    for(let i = 0; i < horizontalAxis.length; i++) {
        for(let j = 0; j < verticalAxis.length; j++) {
           const number = j + i;
           const oneLocation = findSingleLocation(boardSpaceInformation)
           console.log(oneLocation, 'HELLO')
            
            // console.log(singleLocation, 'single location')
            board.push(
            <BoardSquare className="space" number = {number} ></BoardSquare>
            );
        }
    }
    return (
        <div id="board" >
            {board}
        </div>
    )
}

export default Board
