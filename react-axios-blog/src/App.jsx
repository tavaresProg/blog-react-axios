import { Outlet } from "react-router-dom"

import  "./App.css";

import Navbar from "../src/components/Navbar"

function App() {

  return (
    
    <div className="App">
      <Navbar/>
        <div className="container">
          <Outlet />
        </div>
    </div>
    
  )
}

export default App
