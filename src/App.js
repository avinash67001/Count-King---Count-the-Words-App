import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes /*Switch can also be used instead of Routes*/,
  Route,
} from "react-router-dom"; //This is imported to use the react router dom

// let name = "Avinash Chawla";
function App() {
  const [mode, setmode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const Togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#030330";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    // JSX is basically the HTML wearing the JavaScript's Crown
    // In react 'for' is 'htmlFor'
    // 'class' is 'className'  and 'TabIndex' is 'tabIndex'

    // If there is a scenario where we have to use two elements as JSX than we have to use JSX fragment i.e. <> ... </>
    //  All open tags must be closed in react
    // Cpompo
    <>
      {/* <h2> My name is {name}</h2> 
  <div classNameName="blank">Avinash</div> */}
      {/* 1.1 Props has been passed here as a title 'Count' and aboutText as 'About' */}
      {/* 1.2 We cannot pass proptypes as any other data type other than String */}
      <Router>
        <Navbar
          title="Count King"
          aboutText="About"
          mode={mode}
          ToggleMode={Togglemode}
        />
        <Alert alert={alert} />
        <div className="container">
          
          {/* 1.3 */}
          <Routes>
            <Route
              exact
              path="/about"
              // Exact path = is used for the react so that it can match the actual path
              element={<About mode={mode}/>}
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to Analyze below"
                />
              }
            />
          </Routes>
        </div>
      </Router>{" "}
      {/*The jsx should be enclosed in routes while using routes dom in react app*/}
    </>
  );
} 

// This syntax is used to use routes in react app, refer to 1.3
{
  /* <Switch>
<Route path="/about">
  <About />
</Route>
<Route path="/users">
  <Users />
</Route>
<Route path="/">
  <Home />
</Route>
</Switch> */
}

export default App;
