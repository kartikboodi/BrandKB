import AppNavbar from "./components/AppNavbar";
import Router from "./components/Router";
import Sidebar from "./components/Sidebar";

import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <div className="app-content">
          <Sidebar />
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
