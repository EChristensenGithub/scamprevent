import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";

//pages
import WelcomePage from './Pages/WelcomePage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}
export default App;
