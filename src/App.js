//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './home';
import HelperBot from './helperbot';

function App() {
  return (
    <BrowserRouter>
       <div >
         <Routes>
          
           <Route path="/" element={<HomePage />} />
           <Route path="/helperbot" element={<HelperBot />} />
         </Routes>
         </div>
       </BrowserRouter>
  );
}

export default App;
