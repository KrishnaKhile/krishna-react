import React from "react";
import { useParams } from "react-router-dom";

const Useparams = () => {
    const params = useParams()
const {name,email,pass,add,about} = params
console.log(email)
  return (
    <>
      <section className="section profile ">
        <div className="col-xl-8" style={{margin:"auto"}}>
          <div className="card">
            <div className="card-body pt-3">
              <ul className="nav nav-tabs nav-tabs-bordered">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-overview"
                  >
                    Overview
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-edit"
                  >
                    Edit Profile
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-settings"
                  >
                    Settings
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-change-password"
                  >
                    Change Password
                  </button>
                </li>
              </ul>
              <div className="tab-content pt-2">
                <div
                  className="tab-pane fade show active profile-overview"
                  id="profile-overview"
                >
                  <h5 className="card-title">About</h5>
                  <p className="small fst-italic">
                   {about}
                  </p>

                  <h5 className="card-title">Profile Details</h5>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Full Name</div>
                    <div className="col-lg-9 col-md-8">{name}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Address</div>
                    <div className="col-lg-9 col-md-8">
                      {add}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Password</div>
                    <div className="col-lg-9 col-md-8">
                      {pass}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">
                     {email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Useparams;
