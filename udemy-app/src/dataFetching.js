import {React,createContext} from 'react';
export const dataa = createContext('none');
const DataFetching = () => {
    dataa = createContext('here');
    console.log(dataa);
    return (
        <div>
            
        </div>
    );
}

export default DataFetching;
