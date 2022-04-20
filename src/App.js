import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
        <div className="container">
          <Sidebar/> 
        </div>
    </BrowserRouter>  
  );
}

export default App;
