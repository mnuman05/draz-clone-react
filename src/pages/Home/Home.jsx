import React from "react";
import "./home.css";
import { Button } from "react-bootstrap";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const Home = () => {
  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="register-container d-flex flex-column">
        <div className="register-heading d-flex justify-content-between">
          <h3>Create your Daraz Account</h3>
          <span>
            Already member? <a href="#">Login</a> here.
          </span>
        </div>

        <div className="register-form row mt-4">
          <div className="col-12 col-md-6 p-4">
            <div className="register-field d-flex flex-column mb-4">
              <label>Phone Number*</label>
              <input type="text" placeholder="Please Enter you Number"></input>
              <span></span>
            </div>

            <div className="register-field d-flex flex-column mb-4">
              <label>Verfication Code from whatsApp*</label>
              <input type="number" placeholder="Verification Code"></input>
              <span></span>
            </div>

            <div className="register-field d-flex flex-column mb-4">
              <label>Password*</label>
              <input
                type="password"
                placeholder="Minimum 6 characters with a number and a letter"
              ></input>
              <span></span>
            </div>

            <div className="register-field d-flex flex-column">
              <div className="d-flex flex-row">
                <div className="col-4 d-flex flex-column">
                  <label>Birthday</label>
                  <select>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>

                <div className="col-2 d-flex flex-column">
                  <label></label>
                  <select>
                    {Array.from({ length: 31 }, (_, index) => {
                      const day = index + 1;
                      const paddedDay = day.toString().padStart(2, "0");
                      return (
                        <option key={day} value={paddedDay}>
                          {paddedDay}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-2 d-flex flex-column">
                  <label></label>
                  <select>
                    {Array.from({ length: 125 }, (_, index) => (
                      <option key={index} value={1900 + index}>
                        {1900 + index}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-3 d-flex flex-column ms-2">
                  <label>Gender</label>
                  <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-4 ">
            <div className="register-field d-flex flex-column mb-4">
              <label>Full Name*</label>
              <input
                type="text"
                placeholder="Enter your first and last name"
              ></input>
              <span></span>
            </div>

            <div className="register-field d-flex flex-column">
              <div class="mod-login-receive">
                <label class="next-checkbox checked " for="enableSmsNewsletter">
                  <span class="next-checkbox-inner">
                    <i class="next-icon next-icon-select next-icon-xs"></i>
                  </span>
                  <input
                    type="checkbox"
                    data-meta="Field"
                    id="enableSmsNewsletter"
                    aria-checked="true"
                    value="on"
                  />
                </label>
                <p className="mb-2">
                  I'd like to receive exclusive offers and promotions via SMS
                </p>
              </div>
            </div>

            <div className="register-field d-flex flex-column mb-2">
              <button type="submit" class="primary-button">
                SIGN UP
              </button>
            </div>

            <div className="register-field d-flex flex-column mb-3">
              <div class="mod-login-policy fs-12">
                <span>
                  By clicking “SIGN UP”, I agree to Daraz's{" "}
                  <a
                    href="https://www.daraz.pk/terms-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.daraz.pk/privacy-agreement?spm=a2o42.login_signup.0.0.5cf37d68m1lqOw"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-spm-anchor-id="a2o42.login_signup.0.0"
                    className="text-decoration-none"
                  >
                    Privacy Policy
                  </a>
                </span>
              </div>
            </div>

            <div className="register-field d-flex flex-column mb-1">
              <p className="fs-12">Or, sign up with</p>
            </div>

            <div className="register-field d-flex flex-column mb-1">
              {/* <div className="register-social-button">
                <a
                  data-mdb-ripple-init
                  class="btn btn-primary"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-twitter me-2"></i>Twitter
                </a>

                <a
                  data-mdb-ripple-init
                  class="btn btn-primary"
                  style={{ backgroundColor: " #3b5998;" }}
                  //   style="background-color: #3b5998;"
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>

                <i class="bi bi-facebook"></i>
              </div> */}

              <div className="register-icons d-flex justify-content-between">
                <MDBBtn
                  style={{
                    backgroundColor: "#3c5999",
                    width: "49%",
                    border: "none",
                  }}
                  href="#"
                >
                  <MDBIcon fab icon="facebook" className="me-2" /> Facebook
                </MDBBtn>

                <MDBBtn
                  style={{
                    backgroundColor: "#d44937",
                    width: "49%",
                    border: "none",
                  }}
                  href="#"
                >
                  <MDBIcon fab icon="google-plus" className="me-2" /> Google
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
