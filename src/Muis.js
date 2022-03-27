import  React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Muis() {
    const [response1, setResponse1] = useState([])
    const [name, setName] = useState('')

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
                    // console.log(data);
                })
            })
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        viewDataApi();
    },[])

   const handleChange = (event) => {
     setName(event.target.value);
  };

  return (
    <div>
      <h1>basic select</h1>
      <Box sx={{ minWidth: 10 }}></Box>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
      {/* <FormControl> */}
      <InputLabel id="demo-simple-select-label">user name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
           onChange={handleChange}
          autoWidth
          label="user name"
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem> */}
          { response1 ?
                    response1.map((each) => {
                        return (
                            <MenuItem value={each.value} onChange={handleChange}>{each.label}</MenuItem>
                        )})
                    :
                null      
                }
        </Select>
      </FormControl>
    </div>
  );
}
