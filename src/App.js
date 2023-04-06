import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212b57";
      showAlert("Dark mode has been enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  };
  return (
    <>
      <Navbar
        title="Navbar"
        // aboutText="About Textutils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter the text to analyse below"
          mode={mode}
          showAlert={showAlert}
          setAlert={setAlert}
        />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
