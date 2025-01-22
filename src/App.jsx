
import './App.css'
import MyDashboard from './Pages/Dashboard/Dashboard'

import Overview from './Pages/Overview/Overview'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 

  return (
   <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />}/>
          
          <Route path="/dashboard" element={<MyDashboard />} />
          
        
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
