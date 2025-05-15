import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import "./DataTable.css";
import { useState } from 'react';

const columns = [
  {
    field: 'photo', headerName: 'Photo',
    //  width: 150
    // margin:"100px",
    width:130
  },
  {
    field: 'name', headerName: 'Student Name',
    //  width: 150
    // margin:"100px",
    width:180
  },
  {
    field: 'gender', headerName: 'Gender',
    //  width: 130 
  },
  {
    field: 'DOB',
    headerName: 'D.O.B',
    // type: 'number',
    // width: 90,
  },
  {
    field: 'emailID',
    headerName: 'Email ID',
    // type: 'number',
    // width: 90,
  },
  {
    field: 'studentNumber',
    headerName: 'Student Number',
    type: 'number',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    // width: 160,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'parentNumber',
    headerName: 'Parent Number',
    type: 'number',
    // width: 90,
  },
  {
    field: 'studentBatchId',
    headerName: 'Batch Id',
    // type: 'number',
    // width: 90,
  },
  {
    field: 'mentorName',
    headerName: 'Mentor Name',
    // type: 'number',
    // width: 90,
  },
  {
    field: 'Course',
    headerName: 'Course',
    // type: 'number',
    // width: 90,
  },
];

// const rows = [
//   { id: 1, lastName: 'Snow', kk: "buyb", firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', kk: "xctvj", firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', kk: "an", firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', kk: "uigr", firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', kk: "ardytv", firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', kk: "oijb", firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', kk: "zgu", firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', kk: "uhjb", firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', kk: "cytui", firstName: 'Harvey', age: 65 },
// ];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({renderApi}) {
  console.log(renderApi);
  
  var ind = 0;
  // const [ind, setInd] = useState(0);
  return (
    <Paper className='DataTable_con' sx={{ height: "100%", width: '100%',backgroundColor:"red" }}>
      {/* {console.log(rows[ind].lastName)} */}
      {/* {setInd(ind + 1)} */}
      <DataGrid
        // className={((ind++) % 2 == 0) ? "even_row" : "add_row"}
        
        rows={renderApi}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 13]}
        checkboxSelection
        sx={{
          border: 0,
          display:"flex",
          justifyContent:"space-between",
          // "&:nth-last-child(1)": {
          //   backgroundColor: "lightgray"
          // }
        }}
      />
    </Paper>
  );
}
