import React, {useState, useEffect} from 'react';
import fetchData from './fetchData.js';


const PMTile = ({name}) => {

    const [PMNumber, setPMNumber] = useState(0);

    useEffect(() => {
        fetchData(name).then((apiData)=>{
            setPMNumber(apiData)
        })
    },[name])

    return <div className="pm">{PMNumber}</div>
}

export default PMTile;
