import React,{useEffect,useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Child(props) {
  return (
    <div>
         <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>user name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>website</TableCell>
                            <TableCell>Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.myObject ? 
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{props.myObject.id}</TableCell>
                                <TableCell>{props.myObject.username}</TableCell>
                                <TableCell>{props.myObject.email}</TableCell>
                                <TableCell >{props.myObject.address ? myObject.address.city : null}</TableCell>
                                {/* <TableCell >{myObject.address ? myObject.address.street: null}</TableCell>  */}
                                <TableCell >{props.myObject.phone}</TableCell>
                                <TableCell>{props.myObject.website}</TableCell>
                                <TableCell>{props.myObject.company ? props.myObject.company.name : null}</TableCell>
                            </TableRow>
                        : null}
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

export default Child