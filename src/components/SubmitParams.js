import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitParams = () => {
    const [name,setName] = useState("-");
    const [email,setEmail] =useState("-")
    const [pass,setPass] = useState("-")
    const [add,setAdd] =useState("-")
    const [about,setAbout]=useState("-")
// console.log(name);
const navigator = useNavigate()
    const formhandler =(e)=>{
            e.preventDefault()
            console.log(name,email,pass,add,about);
            navigator("/useparams/"+name +"/"+email+"/"+pass+"/"+add+"/"+about);
    }
  return (
    <>
    {/* <Link to="/useparams/krishna">Krishna</Link><br />
    <Link to="/useparams/lakhan">lakhan</Link> */}
      <div className="col-lg-6" style={{ margin: "auto" }}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Vertical Form</h5>

            <form className="row g-3" onSubmit={formhandler}>
              <div className="col-12">
                <label htmlFor="inputNanme4" className="form-label">
                  Your Name
                </label>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="col-12">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e)=>setPass(e.target.value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e)=>setAdd(e.target.value)}
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  About us
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="About us"
                  onChange={(e)=>setAbout(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitParams;
