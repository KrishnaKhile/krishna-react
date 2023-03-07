import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from "axios";


const MuiCurd = () => {
const [cname,setCname] = useState("");
const [scode,setScode] = useState("");
const [email,setEmail] = useState("");
const [mobile,setmobile] = useState("");
const [city,setCity] = useState("");
 
// const saveNor=()=>{
//   // console.log(cname,scode,email,mobile,city);
  // const data={cname,scode,email,mobile};

// //   fetch('http://192.168.43.87/trp/public/trpadmin/trpadmin/insertapi', {  // Enter your IP address here

// //   method: 'POST', 
// //   mode: 'cors', 
// //   body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

// // })
  
// console.log(JSON.stringify(data));
//   fetch("http://192.168.43.87/trp/public/trpadmin/trpadmin/insertapi",
//   {
//     method:'POST',
//     header:{
//       'Accept':'application/json',
//       'Content-Type':'application/json; charset=UTF-8'

//     },
//       body:JSON.stringify(data)
//   }).then((result)=>{
//     console.log(result.data);
    
//   });
// }

const saveNor = async (e) => {
  e.preventDefault();
  await axios.post('http://localhost/trp/public/trpadmin/trpadmin/insertapi',{
    cname:cname,
    scode:scode,
    email:email,
    mobile:mobile,
  }).then((result)=>{
    console.log(result.data);
  });
}

  return (
    <div >
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div className="row col-lg-12" style={{width:"50%"}}>
          <div className="col-lg-8 col-md-4 label ">Consignor  Name</div>
          <div className="col-lg-4 col-md-8"><TextField id="standard-basic" name='cname' value={cname} onChange={(e)=>setCname(e.target.value)} label="Consignor Name" variant="standard" /></div>
        </div>

        <div className="row col-lg-12" style={{width:"50%"}}>
          <div className="col-lg-8 col-md-4 label">Short Code</div>
          <div className="col-lg-4 col-md-8">
          <TextField id="standard-basic" name='scode' value={scode} onChange={(e)=>setScode(e.target.value)} label="Short Code" variant="standard" />
          </div>
        </div>

        <div className="row col-lg-12" style={{width:"50%"}}>
          <div className="col-lg-8 col-md-4 label">Email</div>
          <div className="col-lg-4 col-md-8"><TextField id="standard-basic" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" variant="standard" /></div>
        </div>

        <div className="row col-lg-12" style={{width:"50%"}}>
          <div className="col-lg-8 col-md-4 label">Mobile</div>
          <div className="col-lg-4 col-md-8"><TextField id="standard-basic" name='mobile' value={mobile} onChange={(e)=>setmobile(e.target.value)} label="Mobile" variant="standard" /></div>
        </div>

        {/* <div className="row col-lg-12" style={{width:"50%"}}>
          <div className="col-lg-8 col-md-4 label">City</div>
          <div className="col-lg-4 col-md-8">
          <TextField id="standard-basic" label="City" value={city} onChange={(e)=>setCity(e.target.value)} variant="standard" />
          </div>
        </div> */}

        {/* <div className="row col-lg-12" style={{width:"50%"}}>
          <div className="col-lg-8 col-md-4 label">PINCode</div>
          <div className="col-lg-4 col-md-8"><TextField id="standard-basic" label="Pincode" variant="standard" /></div>
        </div>

        <div className="row col-lg-12" style={{width:"50%"}}>
          <div className="col-lg-8 col-md-4 label">Taluka</div>
          <div className="col-lg-4 col-md-8"><TextField id="standard-basic" label="Taluka" variant="standard" /></div>
        </div> */}
        </Box>
        <Button onClick={saveNor} variant="contained">Submit</Button>
    </div>
  )
}

export default MuiCurd
