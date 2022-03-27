import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { useEffect, useState } from 'react';
function Mui() {
    const [response1, setResponse1] = useState([])

    // Fetch API 
    function viewDataApi() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(data => {
                data.map(each => {
                    setResponse1(response1 => [...response1, { value: each.name, label: each.name, }])
                })
            })
            .catch(error => console.log('error', error));
    }

    // Fetch API Call
    useEffect(() => {
        viewDataApi();
    }, [])
    return (
        <div>
            <h1>Autocomplete</h1>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={response1}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
    )
}

export default Mui;
