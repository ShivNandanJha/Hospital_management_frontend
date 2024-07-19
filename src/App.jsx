import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Homepage from "./components/homepage";
import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import Pricing from "./components/pricing";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element        = {<Homepage />} />
        <Route path = "/about" element   = {<About />} />
        <Route path = "/pricing" element = {<Pricing />} />
     </Routes>
      <Footer />
    </div>
  );
}
