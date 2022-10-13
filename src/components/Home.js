import React, { useState } from "react";

const Home = () => {
 
  //   const [login, setlogin] = useState(10);
  const login = 2;

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const getData = (val) => {
    setData(val.target.value);
    setPrint(false);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tnc, setTnc] = useState(false);
  const getFormData = (e) => {
    console.log(name, email, password, tnc);
    e.preventDefault();
  };
  return (
    <>
      {login === 1 ? (
        <h1>Hello {login}</h1>
      ) : login === 2 ? (
        <h1>Hello {login}</h1>
      ) : (
        <h1>Hello {login}</h1>
      )}

      

      <div className="container mt-3">
        <h2>Card Header and Footer</h2>
        <div className="card">
          <div className="card-header">
            <input type="text" onChange={getData} />
          </div>
          <div className="card-body">{print ? <h1>{data}</h1> : null}</div>
          <div className="card-footer">
            <button onClick={() => setPrint(true)}>ok</button>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: "20rem", margin: "20px 0 24px 0" }}>
        <img
          className="card-img-top"
          src="https://www.w3schools.com/bootstrap5/img_avatar3.png"
          alt="card"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          {print ? (
            <p className="card-text">
              He useState che ek khup mst example ahe ani mi te navin if else
              statement ne kele ahe
            </p>
          ) : null}

          {/* <button className="btn btn-primary" onClick={()=>setPrint(false)}>Hide Profile</button>
          <button className="btn btn-primary" onClick={()=>setPrint(true)}>See Profile</button> */}
          <button className="btn btn-primary" onClick={() => setPrint(!print)}>
            See Profile
          </button>
        </div>
      </div>

      <form onSubmit={getFormData}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Your Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputText"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
                onChange={(e) => setTnc(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Terms and Conditions
              </label>
            </div>
          </div>
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
    </>
  );
};

export default Home;
