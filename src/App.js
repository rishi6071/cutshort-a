import React from "react";
import "./App.css";

// Vanilla Bootstrap Css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// React-Hot-Toast
import { Toaster } from "react-hot-toast";

// Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      {/* Notification */}
      <Toaster toastOptions={{ style: { background: "#664DE6", color: "#fff", fontSize: "0.8rem" }, duration: 1000 }} />

      {/* Pages */}
      <Home />
    </div>
  );
};

export default App;
