import TestData from './TestData.json';

const fetchData = async (propertyName) => {
    //take a string and find that property in JSON File
    return TestData.results[0][propertyName];
}

export default fetchData;
