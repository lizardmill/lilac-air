import React, {useState, useEffect} from 'react';
import fetchData from './fetchData.js';


const AQITile = ({name}) => {

    const [AQINumber, setAQINumber] = useState(0);

    useEffect(() => {
        fetchData(name).then((apiData)=>{
            setAQINumber(apiData)
        })
    },[name])

    return <div className="aqi">{AQINumber}</div>
}

export default AQITile;
