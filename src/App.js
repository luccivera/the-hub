import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarCopy from "./components/NavbarCopy";

function App() {
  return (
    <div className="container">
      <div className="body-container">
        <NavbarCopy />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
