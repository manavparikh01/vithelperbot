//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './home';

function App() {
  return (
    <BrowserRouter>
       <div >
         <Routes>
          
           <Route path="/" element={<HomePage />} />
          
         </Routes>
         </div>
       </BrowserRouter>
  );
}

export default App;
