import React from 'react';
import FrontpageStartButtonCSS from '../Styles/FrontpageStartButtonCSS.css';
import { useNavigate } from "react-router-dom";

const FrontpageStartButton = () => {

    let navigate = useNavigate();

    const toQuiz = () => {
        navigate("/Quizpage");
    }

    return (
        
        <div>
            <button onClick={toQuiz} class="glow-on-hover" type="button">Start!</button>
        </div>
      

    );
}

export default FrontpageStartButton