import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../Assets/CustomNav.module.css";

const Nestedexp = () => {
  const location = useLocation();
  return (
    <>
      <div className="col-xl-8" style={{ margin: "auto" }}>
        <div className="card" >
          <div className="card-body pt-3">
            <ul className="nav nav-tabs nav-tabs-bordered">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="nesabout"
                >
                  Overview
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    location.pathname === "/editprofile" ? "active" : ""
                  }`}
                  to="editprofile"
                >
                  Edit Profile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    location.pathname === "/setting" ? "active" : ""
                  }`}
                  to="setting"
                >
                  Get API Example
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    location.pathname === "/muicurd" ? "active" : ""
                  }`}
                  to="muicurd"
                >
                  Post Api
                </NavLink>
              </li>
            </ul>

            <div className="tab-content pt-2">
              <Outlet />

              {/* <div className="tab-pane fade pt-3" id="profile-settings">
                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="fullName"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Email Notifications
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="changesMade"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="changesMade"
                        >
                          Changes made to your account
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="newProducts"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="newProducts"
                        >
                          Information on new products and services
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="proOffers"
                        />
                        <label className="form-check-label" htmlFor="proOffers">
                          Marketing and promo offers
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="securityNotify"
                          checked
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="securityNotify"
                        >
                          Security alerts
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div> */}

              {/* <div className="tab-pane fade pt-3" id="profile-change-password">
                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="currentPassword"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Current Password
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="currentPassword"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="newPassword"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      New Password
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="newpassword"
                        type="password"
                        className="form-control"
                        id="newPassword"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="renewPassword"
                      className="col-md-4 col-lg-3 col-form-label"
                    >
                      Re-enter New Password
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="renewpassword"
                        type="password"
                        className="form-control"
                        id="renewPassword"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Change Password
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nestedexp;
