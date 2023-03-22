import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Place from "./components/Place";
import LogInAcc from "./components/LogInAcc";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";
import Alert from "./components/Alert";
import axios from "axios";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const [myData, setMyData] = useState([])
  const [error, setError] = useState("")
  const API="https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=d7b07be003e54a02bce4d5e4609269fe"

  useEffect(() => {
   axios
   .get(API)
   .then((res)=>{
    console.log(res.data.features)
   })

  }, [])
  



  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Place" element={<Place />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/loginacc" element={<LogInAcc />} />
          <Route path="/signin" element={<SignUp showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}
