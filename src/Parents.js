import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';


function Parents() {
    // Variables
    const [response1, setResponse1] = useState([])
    
    // Fetch API 
    function viewDataApi() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(data =>{
                data.map(each => {
                    setResponse1(response1 => [...response1, {value: each.name, label: each.name,}])
                })
            })
            .catch(error => console.log('error', error));
    }

    // Fetch API Call
    useEffect(() => {
        viewDataApi();
    },[])

    // JSX
    return(
       <div>
            <Select options={response1} />
       </div>
    )
};
export default Parents;