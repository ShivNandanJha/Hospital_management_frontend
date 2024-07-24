import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Homepage from "./components/homepage";
import { Route, Routes } from "react-router-dom";
import About from "./components/about";

import Contact from "./components/contact";
import Appointment from "./components/appointment";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element            = {<Homepage />} />
        <Route path = "/about" element       = {<About />} />
        <Route path = "/contact" element     = {<Contact />} />
        <Route path = "/appointment" element = {<Appointment/>} />
      </Routes>
      <Footer />
    </div>
  );
}
