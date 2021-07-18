import React, {useState, useEffect} from 'react';
import fetchData from './fetchData.js';


const ParticlesPerDecileter = ({name}) => {

    const [PPDNumber, setPPDNumber] = useState(0);

    useEffect(() => {
        fetchData(name).then((apiData)=>{
            setPPDNumber(apiData)
        })
    },[name])

    return <div className="ppd">{PPDNumber}</div>
}

export default ParticlesPerDecileter;
