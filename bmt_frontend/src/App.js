import logo from './logo.svg';
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import EditProfile from './pages/EditProfile';
import EditSuivi from './pages/EditSuivi';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <div className="container">
          <Routes>
            <Route path="/" exact element={<EditSuivi />}></Route>
            
            <Route path="/edit-profile" element={<EditProfile />} />

            
          </Routes>
        </div>
      
      </Router>
    </div>
  );
}

export default App;
