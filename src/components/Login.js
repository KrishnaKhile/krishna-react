import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();
    if (user === "krishna" && pass === "12345") {
      localStorage.setItem("login", true);
      navigate("/")
    } else {
      setLoginErr(true);
    }
  };
  
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login === true) {
      navigate("/")
    }
  });


  const userHandler = (e) => {
    let item = e.target.value;
    console.log(item);
    if (item.length < 3) {
      console.log("invalid user");
      setUserErr(true);
    } else {
      setUserErr(false);
      setUser(item);
    }
  };

  const passHandler = (e) => {
    let passval = e.target.value;
    console.log(passval);
    if (passval.length < 3) {
      console.log("invalid pass");
      setPassErr(true);
    } else {
      console.log("valid")
      setPassErr(false);
      setPass(passval);
    }
  };


  
  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                        <p className="text-center small">
                          Enter your username & password to login
                        </p>
                      </div>
                      {loginErr ? (
                        <span style={{ color: "red" }}>Password not valid</span>
                      ) : null}
                      <form
                        className="row g-3 needs-validation"
                        onSubmit={formHandler}
                      >
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Username
                          </label>
                          <div className="input-group has-validation">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend"
                            >
                              @
                            </span>
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourUsername"
                              required
                              onChange={userHandler}
                            />

                            <div className="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                          {userErr ? (
                            <span style={{ color: "red" }}>User not valid</span>
                          ) : null}
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourUsername"
                              required
                              onChange={passHandler}
                            />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>
                        {passErr ? (
                          <span style={{ color: "red" }}>
                            Password not valid
                          </span>
                        ) : null}
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="remember"
                              value="true"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Don't have account?{" "}
                            <a href="pages-register.html">Create an account</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="credits">
                    Developed & Designed by <a href="/">Krushna Khile</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
