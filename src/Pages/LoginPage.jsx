import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import "../style/LoginPage.css"; 

function LoginPage() {
  return (
    <>
      <Navbar/>
      <div className="loginbackground">
      <div style={{ minHeight: "100px" }}></div>
      <div className="login-page-container"> 
        <div className="left-side"><img src="../assets/ll-header2.png" height="150px"></img></div>
        <div className="right-side"><Form /></div>
      </div>
      <div style={{ minHeight: "80px" }}></div>
      </div>
      <Footer/>
    </>
  );
}

export default LoginPage;
