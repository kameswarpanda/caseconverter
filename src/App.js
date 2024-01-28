import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
//   Router,
//   Switch,
//   link
// } from "react-router-dom";

// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light"); //for dark mode enable or not
  // const [alert, setAlert] = useState(null);

  // const showAlert =(messgae, type)=>{
  //   setAlert({
  //     msg: messgae,
  //     type: type
  //   })
  // }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      // showAlert("Dark mode has been Enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode has been Enabled", "success")
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} />

      {/* <Alert alert={alert}/> */}

      <div className="container my-3">
        <TextForm mode={mode} />
      </div>

      {/* <About mode={mode} /> */}

      {/* <switch>
        <Route path="/About">
          <About mode={mode} />
        </Route>
        <Route path="/About">
          <TextForm mode={mode} />
        </Route>
      </switch>
      </Router> */}
    </>
  );
}

export default App;
