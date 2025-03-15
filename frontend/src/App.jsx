import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "././home/Home.jsx";
import Courses from "./courses/Courses.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Contact from "./contact/Contact.jsx";
function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <h1 className="text-pink-500 ">sahil rawat</h1>
      <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
