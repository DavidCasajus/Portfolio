import { Fragment } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import NavBar from "components/navbar/NavBar";
import Footer from "components/footer/Footer";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.body.style.overflow = "auto";
    }, 2000);
  });
  return (
    <Fragment>
      {/* <NavBar /> */}
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
