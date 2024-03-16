import React, { useState } from "react";
import HomePage from "../Pages/HomePage";
import { useFirebase } from "../context/Firebase";
import { Navigate } from "react-router-dom";

function Copyright(props) {
  return (
    <div
      style={{ 
        fontFamily: "Montserrat", 
        fontSize: "small", 
        color: "#ffffff", 
        textAlign: "center" 
      }}
      {...props}
    >
      {"Copyright © Labour Link "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
}

export default function SignInSide({ isLogin, setIsLogin }) {
  const [phone, setPhone] = useState("");
  const firebase = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      displayWarning("Invalid Phone Number!");
      return;
    }
    try {
      console.log("Login process initiated....");
      await firebase.loginWithPhoneNumber(phone);
    } catch (err) {
      console.log("Error during login ", err);
      displayWarning(err.message);
    }
  };

  const displayWarning = (message) => {
    window.alert(message);
  };

  if (firebase.user) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div style={{ color: "white"}}>
        {isLogin ? (
          <HomePage isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          <div>
            <div
              style={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>Sign In</h2>
              <br></br>
              <form
                noValidate
                style={{ width: "50%" }}
                onSubmit={(e) => handleSubmit(e)}
                sx={{ mt: 1 }}
              >
                <input
                  required
                  style={{ 
                    color: "#ffffff",
                    marginBottom: "1rem", 
                    padding: "1rem", 
                    borderRadius: "4px", 
                    backgroundColor: "#000000",
                    border: "1px solid #f8be00", 
                    width: "87%", 
                    fontSize: "1.2rem" // Adjust font size
                  }}
                  id="phone"
                  placeholder="Phone Number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit" style={{  
                  padding: "0.7rem", // Increase padding
                  borderRadius: "4px", 
                  backgroundColor: "#f8be00",
                  border: "1px solid #f8be00", 
                  width: "100%", 
                  fontSize: "1rem",
                  marginBottom:"40px"
                }}>
                  Log In
                </button>
                <div id="recaptcha-verifier"></div>
                <div style={{ textAlign: 'center' }}>
                <a href="/userprofilesetup" style={{ color: "#fff" }}>
                  {"Don't have an account? Sign Up"}
                </a>
                <Copyright style={{ marginTop: "1rem" }} />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
