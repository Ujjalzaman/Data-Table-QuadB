import React, { useEffect, useState } from 'react';
import DataList from '../DataList/DataList';
import './DataTable.css';
const DataTable = () => {
    const [data, setData] = useState({})

    useEffect(() =>{
        // const url =  'https://api.wazirx.com/api/v2/tickers';
        fetch('/api/v2/tickers')
        .then(res => res.json())
        .then(data => setData(data.btcinr))
    }, [])


    return (
        <div className="data-table">
            <DataList data={data}></DataList>
   
            {
                // console.log(data)
                // data.map(data =>
                //     <li>name {data.name}</li>
                // )
            } 
        </div>
    );
};

export default DataTable;