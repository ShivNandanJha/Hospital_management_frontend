import { useContext, useEffect } from "react";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Homepage from "./components/homepage";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Appointment from "./components/appointment";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";


export default function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = 
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <div><Router>
      <Navbar />
      <Routes>
        <Route path = "/" element            = {<Homepage />} />
        <Route path = "/about" element       = {<About />} />
        <Route path = "/contact" element     = {<Contact />} />
        <Route path = "/appointment" element = {<Appointment />} />
        <Route path = "/login" element       = {<Login />} />
        <Route path = "/register" element    = {<Register />} />
      </Routes>
      <Footer />
      <ToastContainer position = "top-center" />
      </Router>
    </div>
  );
}
