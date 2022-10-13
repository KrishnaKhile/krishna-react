import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Button from "@mui/material/Button";
import axios from 'axios'
import Box from "@mui/material/Box";

import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { useNavigate } from "react-router-dom";

// const rows = [
//   { id: 1, nee_name: 'Snow', nee_email: 'Jon', nee_mobile: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];
// const initialRows = [
//   {
//     id: 1,
//     nor_name: "krishna",
//     age: 25,
//     dateCreated: "2022-10-10",
//     lastLogin: "2022-10-09"
//   },
//   {
//     id: 2,
//     nor_name: "krishna",
//     age: 25,
//     dateCreated: "2022-10-10",
//     lastLogin: "2022-10-09"
//   },
//   {
//     id: 4,
//     nor_name: "krishna",
//     age: 25,
//     dateCreated: "2022-10-10",
//     lastLogin: "2022-10-09"
//   },
//   {
//     id: 5,
//     nor_name: "krishna",
//     age: 25,
//     dateCreated: "2022-10-10",
//     lastLogin: "2022-10-09"
//   },
//   {
//     id: 6,
//     nor_name: "krishna",
//     age: 25,
//     dateCreated: "2022-10-10",
//     lastLogin: "2022-10-09"
//   }
// ];

const Setting = () => {
  const [adata, setData] = useState([]);
  
  // console.log(adata)

  const fetchData = async () => {
    try {
      const res = await fetch(
        "http://localhost/trp/public/trpadmin/trpadmin/getmax"
      );
      const data = await res.json();
      setData(data.norlist);
      // console.table(data.norlist);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const initialRows = adata?.map((user) => {
    return {
      id: user?.nor_id,
      nor_name: user?.nor_name,
      nor_email: user?.nor_email,
      nor_mobile: user?.nor_mobile,
      city: user?.city,
    };
  });
  // console.table(initialRows);

  const [rows, setRows] = useState(initialRows);
 // const [rowModesModel, setRowModesModel] = React.useState({});
  // console.log(rows);
//   const deleteNor = async (id) => {
//     await axios.delete(`http://localhost/trp/public/trpadmin/trpadmin/deleteapi/${id}`)
//     fetchData()
// }

const navigate = useNavigate();
const handleEditClick = (id) => () => {
  console.log(id)
  fetch(`http://localhost/trp/public/trpadmin/trpadmin/noreditapi/${id}`,{
      method:'PUT',
    }).then((result)=>{
      result.json().then((res)=>{
        navigate("EditNor/"+res.nor_id+"/"+res.nor_name+"/"+res.nor_shortcode+"/"+res.nor_email+"/"+res.nor_mobile);
      })
    })
};


  const handleDeleteClick = (id) => () => {
    // setRows(rows.filter((rows) => rows.id !== id));
    // alert(id);
    fetch(`http://localhost/trp/public/trpadmin/trpadmin/deleteapi/${id}`,{
      method:'DELETE',
    }).then((result)=>{
      result.json().then((res)=>{
        console.log(res);
        fetchData()
      })
    })
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nor_name", headerName: "Consignor name", width: 220 },
    { field: "nor_email", headerName: "Email", width: 200 },
    { field: "nor_mobile", headerName: "Contact", width: 130 },
    { field: "city", headerName: "City", width: 140 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  // console.table(columns);

  return (
    <>
      <div>
        <h1>Hello API</h1>
        {/* {adata ? adata.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.nee_name}</td>
          <td>{item.nee_shortcode}</td>
          <td>{item.pin}</td>
        </tr>
      )):<p>Consignee not found</p>} */}
      </div>
      <Box
        sx={{
          height: 500,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <div style={{ height: 400, width: "100%", backgroundColor: "#fff" }}>
          <DataGrid
            rows={initialRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </Box>
    </>
  );
};

export default Setting;
