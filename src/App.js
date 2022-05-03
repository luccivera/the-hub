import "./App.css";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="body-container">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
