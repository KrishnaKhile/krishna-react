import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from "axios";

import { useNavigate, useParams } from 'react-router-dom'

const EditNor = () => {
const navigate = useNavigate();

const param = useParams();
const {nor_id,nor_name,nor_shortcode,nor_email,nor_mobile}=param

// const [id,setId] = useState(nor_id);
const [cname,setCname] = useState(nor_name);
const [scode,setScode] = useState(nor_shortcode);
const [email,setEmail] = useState(nor_email);
const [mobile,setmobile] = useState(nor_mobile);
// console.log(nor_id)
const updateNor=async(e)=>{
  // console.log(id,cname,scode,email,mobile);
    await axios.put(`http://localhost/trp/public/trpadmin/trpadmin/norUpdateapi/${nor_id}`,{
        // id:nor_id,
        cname:cname,
        scode:scode,
        email:email,
        mobile:mobile,
      }).then((result)=>{
        console.log(result.data);
navigate("/nestedroute/setting")
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
       <div className="col-lg-4 col-md-8"><TextField id="standard-basic" value={cname} onChange={(e)=>setCname(e.target.value)} label="Consignor Name" variant="standard" /></div>
     </div>

     <div className="row col-lg-12" style={{width:"50%"}}>
       <div className="col-lg-8 col-md-4 label">Short Code</div>
       <div className="col-lg-4 col-md-8">
       <TextField id="standard-basic" value={scode} onChange={(e)=>setScode(e.target.value)} label="Short Code" variant="standard" />
       </div>
     </div>

     <div className="row col-lg-12" style={{width:"50%"}}>
       <div className="col-lg-8 col-md-4 label">Email</div>
       <div className="col-lg-4 col-md-8"><TextField id="standard-basic" value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" variant="standard" /></div>
     </div>

     <div className="row col-lg-12" style={{width:"50%"}}>
       <div className="col-lg-8 col-md-4 label">Mobile</div>
       <div className="col-lg-4 col-md-8"><TextField id="standard-basic" value={mobile} onChange={(e)=>setmobile(e.target.value)} label="Mobile" variant="standard" /></div>
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
     <Button onClick={updateNor} variant="contained">Update</Button>
 </div>
  )
}

export default EditNor
