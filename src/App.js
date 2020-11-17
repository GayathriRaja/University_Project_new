import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./Stylesheet/university_Project_styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <Routes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
