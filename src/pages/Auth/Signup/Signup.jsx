import React from "react";
import "./signup.css";

import SocialIcon from "../../../images/social-button.png";
import EyeIcon from "../../../images/eye-icon.png";

import DropdownIcon from "../../../images/upper-lower-arrow.png";


import { Image } from "react-bootstrap";

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center mt-4 ps-0">
      <div className="register-container d-flex flex-column">
        <div className="register-heading d-flex justify-content-between">
          <h3>Create your Daraz Account</h3>
          <span>
            Already member? <a href="#">Login</a> here.
          </span>
        </div>

        <div className="register-form row mt-4">
          <div className="col-12 col-md-6 p-4 register-form-left-col">
            <div className="register-field d-flex flex-column mb-4">
              <label>Phone Number*</label>
              <input
                type="text"
                placeholder="Please enter your phone number"
              ></input>
              <span></span>
            </div>

            <div className="register-field d-flex flex-column mb-4 position-relative">
              <label>Verfication Code from whatsApp*</label>
              <input placeholder="Verification Code"></input>
              <span></span>

              <span className="mod-send-code">Send</span>
            </div>

            <div className="register-field d-flex flex-column mb-4 position-relative">
              <label>Password*</label>
              <input
                type="password"
                placeholder="Minimum 6 characters with a number and a letter"
              ></input>
              <span></span>
              <div className="register-eye-icon">
                <Image src={EyeIcon} />
              </div>
            </div>

            <div className="register-field d-flex flex-column">
              <div className="d-flex flex-row birthday">
                <div className="col-4 d-flex flex-column birthd-inp position-relative birthday-month">
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

                  <div className="drop-down-icon">
                    <Image src={DropdownIcon} />
                  </div>
                </div>

                <div className="col-2 d-flex flex-column birthd-inp-day position-relative birthday-day">
                  <label></label>
                  <select style={{ minWidth: "72px" }}>
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

                  <div className="drop-down-icon-day">
                    <Image src={DropdownIcon} />
                  </div>
                </div>

                <div className="col-2 d-flex flex-column birthd-inp-year position-relative birthday-year">
                  <label></label>
                  <select
                    style={{
                      padding: "10px",
                    }}
                  >
                    {Array.from({ length: 125 }, (_, index) => (
                      <option key={index} value={1900 + index}>
                        {1900 + index}
                      </option>
                    ))}
                  </select>

                  <div className="drop-down-icon-year">
                    <Image src={DropdownIcon} />
                  </div>
                </div>

                <div className="col-3 d-flex flex-column position-relative gender">
                  <label>Gender</label>
                  <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  <div className="drop-down-icon-gender">
                    <Image src={DropdownIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-4 register-form-right-col">
            <div className="register-field d-flex flex-column mb-4">
              <label>Full name*</label>
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
                <p className="mb-2 small-heading-color">
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
                <span className="small-heading-color">
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
              <p className="fs-12 small-heading-color">Or, sign up with</p>
            </div>

            <div className="register-field d-flex flex-column mb-1 register-social-icon">
              <div className="register-icons d-flex justify-content-between">
                <Image src={SocialIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
