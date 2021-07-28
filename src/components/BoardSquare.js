import React from 'react';
import {drop, dragOver} from '../functions/dropDragOver';
// import { getLocations } from '../functions/fetchcall';


export default function BoardTwo(props) {

    console.log(props, 'PROPS ARE HERE')

    return <div className="boardpiece" onDrop={drop} onDragOver={dragOver}>
        <div>        
            <div>{props.number}</div>
            <div>Title: {props.locationTitle}</div>
            <div>Image: {props.singleLocation}</div>
        </div> 
        Board Space
    </div>
}



// const [boardSpaceInformation, setBoardSpaceInformation] = useState({locationTitle: '', locationImage: ''});
    // const [boardSpaceInformation, setBoardSpaceInformation] = useState([]);

    // useEffect(() => {
    //     getLocations()
    //         .then(res => {setBoardSpaceInformation(res)})
    // }, [])

    // let locationTitle = boardSpaceInformation.map(function(info) {
    //     // console.log(info);
    //     return info.locationTitle;
    // });

    // let locationImage = boardSpaceInformation.map(function(info) {
    //     // console.log(info);
    //     return info.locationImage;
    // });

    // let location = boardSpaceInformation[0]

    //Why is the fetch call an array? On wrong component it seems. Need to go to board and do it there. Mapping here put all of the data on one space.
