import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

//pages
import WelcomePage from './Pages/WelcomePage';
import QuizPage from './Pages/QuizPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Quizpage" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}
export default App;
