import { useState, useTransition } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

import image from "./img/cars.jpg";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./Components/Welcome";
function App() {
  //document.body.style.backgroundImage = "url('/React-TextUtils/cars.jpg')";
  const [welcomeMsgContent, setWelcomeMsgContent] = useState("HEY");
  const [alert, setAlert] = useState("HEY");
  const [mode, setMode] = useState("light");
  const [img, setImg] = useState("url('/React-TextUtils/cars.jpg')");
  document.body.style.backgroundImage = img;
  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      //  document.body.style.backgroundColor = "white";
      //  document.body.style.backgroundImage = "none";
      setImg("url('/React-TextUtils/cars.jpg')");
      //  document.body.style.backgroundImage = img;
      //  document.body.style.backgroundImage = "url('/React-TextUtils/cars.jpg')";
      document.body.style.backgroundImage = img;
      document.body.style.backgroundSize = "cover"; // Cover the entire background
      document.body.style.backgroundPosition = "center";

      showAlert("Light mode has been enabled", "Success");
    } else {
      document.body.style.backgroundImage = "none";
      setImg("url('/React-TextUtils/dark1.png')");
      document.body.style.backgroundImage = img;
      setMode("dark");
      // document.body.style.backgroundColor = "red";
      showAlert("dark mode has been enabled", "Success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const welcomeMsg = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <div className="container">
          <Navbar mode={mode} togglemode={togglemode} />
        </div>
        <div className="container">
          <Alert alert={alert} />
        </div>
        <div className="container">
          <Welcome welcomeMsg={welcomeMsg} />
        </div>
        {/* <div className="container">
          <About mode={mode} heading="About Us" />
        </div> */}
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} heading="About Us" />
            </Route>

            <Route exact path="/convert">
              <TextForm
                mode={mode}
                heading="Enter the text to annalyze "
                showAlert={showAlert}
              />
            </Route>
          </Switch>

          {/* <TextForm
            mode={mode}
            heading="Enter the text to annalyze 4"
            showAlert={showAlert}
          /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
