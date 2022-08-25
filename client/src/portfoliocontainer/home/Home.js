import React from "react";
import Profile from "./profile/Profile";
import Footer from "./footer/Footer";
import "./Home.css";
export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#000058",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="home-container"
    >
      <Profile />
      <Footer />
    </div>
  );
}
