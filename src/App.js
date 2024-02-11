import { useState, useTransition } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState("HEY");
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "red";
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

  return (
    <>
      <Router>
        <div className="container">
          <Navbar mode={mode} togglemode={togglemode} />
        </div>
        <div className="container">
          <Alert alert={alert} />
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
                heading="Enter the text to annalyze 4"
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
