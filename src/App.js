//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './home';
import HelperBot from './helperbot';
import AdminPage from './adminPage';
import FeedbackForm from './feedback';

function App() {
  return (
    <BrowserRouter>
       <div >
         <Routes>

           <Route path="/" element={<HomePage />} />
           <Route path="/admin" element={<AdminPage />} />
           <Route path="/helperbot" element={<HelperBot />} />
           <Route path="/feedback" element={<FeedbackForm />} />
         </Routes>
         </div>
       </BrowserRouter>
  );
}

export default App;
