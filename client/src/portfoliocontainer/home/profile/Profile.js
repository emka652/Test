import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {" "}
            Hai, Saya <span className="highlighted-text">Muammar</span>
          </span>
        </div>
        <div className="profile-detail-role">
          <span className="primary-text">
            {" "}
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Blockchain",
                  1000,
                  "FullStack Developer",
                  1000,
                  "Cross Platform v",
                  1000,
                  "Front-End",
                  1000,
                  "React/React Native",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              Jangan pernah menyerah, putus asa dan kecewa.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">
            {""}
            Hire Me{" "}
          </button>
          <a href="#" download="#">
            <button className="btn highlighted-btn">Resume Ku</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}

// <a href='namafile' download='muammar namafile.pdf'>
// <button className='btn highlighted-btn>Resume Ku<button>

// di href lainnya masukkan link sosmed
